const User = require('../src/models/User')

function show(req, res, next) {
    if (req.user.id === req.post.userid || User.isAdmin(req.user.roles) ) {
        console.log(req.user.roles)
        next();
    } else {
        res.status(401).json({
            msg: "You are not authorized to see this post"
        })
    }
}

function update(req, res, next) {
    if (req.user.id === req.post.userid || User.isAdmin(req.user.roles)) {
        next();
    } else {
        res.status(401).json({
            msg: "You are not authorized to update this post"
        })
    }
}

function deletePost(req, res, next) {
    if (req.user.id === req.post.userid || User.isAdmin(req.user.roles)) {
        next();
    } else {
        res.status(401).json({
            msg: "You are not authorized to delete this post"
        })
    }
}

module.exports = {
    show,
    update,
    deletePost
}