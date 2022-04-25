const Post = require('../models/Post');

async function find(req, res, next) {
    let post = await Post.findByPk(req.params.id);
    if (!post) {
        res.status(404).json({
            msg: "Post not found"
        });
    } else {
        req.post = post;
        next();
    }
}

async function index(req, res) {
    let posts = await Post.findAll();
    res.json(posts);
}

// Show
async function show(req, res) {
    res.json(req.post);
}

// Update
async function update(req, res) {
    req.post.title = req.body.title;
    req.post.body = req.body.body;
    req.post.save().then(post => {
        res.json(post);
    })
}



// Delete
async function deletePost(req, res) {
    req.post.destroy().then(post => {
        res.json({
            msg: "Post deleted successful"
        })
    })
}




module.exports = {
    find,
    index,
    show,
    update,
    deletePost
}
