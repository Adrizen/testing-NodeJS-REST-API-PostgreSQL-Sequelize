const Post = require('../models/Post');

async function index(req, res) {
    let posts = await Post.findAll();
    res.json(posts);
}

// Show
async function show(req, res) {
    let post = await Post.findByPk(req.params.id);
    if (!post) {
        res.status(404).json({
            msg: "Post not found"
        });
    } else {
        res.json(post);
    }
}

// Update
async function update(req, res) {
    let post = await Post.findByPk(req.params.id);
    if (!post) {
        res.status(404).json({
            msg: "Post not found"
        });
    } else {
        post.title = req.body.title;
        post.body = req.body.body;
        post.save().then(post => {
            res.json(post);
        })
    }
}


// Delete
async function deletePost (req, res) {
    let post = await Post.findByPk(req.params.id);
    if (!post) {
        res.status(404).json({
            msg: "Post not found"
        });
    } else {
        post.destroy().then(post => {
            res.json({
                msg: "Post deleted successful"
            })
        })
    }
}



module.exports = {
    index,
    show,
    update,
    deletePost
}
