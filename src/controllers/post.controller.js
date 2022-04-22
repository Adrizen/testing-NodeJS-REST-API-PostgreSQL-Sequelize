const Post = require('../models/Post');

async function index(req, res){
    let posts = await Post.findAll();
    res.json(posts);
}

module.exports = {
    index
}
