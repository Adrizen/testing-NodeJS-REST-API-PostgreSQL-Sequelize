const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/User');
//const { json } = require('sequelize/types');

async function signUp(req, res) {
    const { name, password, email } = req.body;
    try {
        let hashedPassword = bcrypt.hashSync(password, 10);  // encrypt password.
        User.create({
            name,
            password: hashedPassword,
            email
        }).then(user => {
            // Return token.
            let token = jwt.sign({ user: user }, "secret", {    // token creation
                expiresIn: "7d"
            });
            res.json({
                user: user,
                token: token
            });
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }
}

function signIn(req, res) {
    let { email, password } = req.body;

    // Searching user.
    user.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (!user) {
            res.status(404).json({
                msg: "User not found with that email."
            })
        } else {
            if (bcrypt.compareSync(password, user.password)) {
                // Passwords are the same, return token.
                let token = jwt.sign({ user: user }, "secret", {    // token creation
                    expiresIn: "7d"
                });function signIn(req, res) {
                    let { email, password } = req.body;
                
                    // Searching user.
                    user.findOne({
                        where: {
                            email: email
                        }
                    }).then(user => {
                        if (!user) {
                            res.status(404).json({
                                msg: "User not found with that email."
                            })
                        } else {
                            if (bcrypt.compareSync(password, user.password)) {
                                // Passwords are the same, return token.
                                let token = jwt.sign({ user: user }, "secret", {    // token creation
                                    expiresIn: "7d"
                                });
                                res.json({
                                    user: user,
                                    token: token
                                });
                            } else {
                                res.status(401).json({
                                    msg: "Incorrect password."
                                })
                            }
                        }
                    }).catch(err => {
                        res.status(500).json(err)
                    })
                }
                res.json({
                    user: user,
                    token: token
                });
            } else {
                res.status(401).json({
                    msg: "Incorrect password."
                })
            }
        }
    }).catch(err => {
        res.status(500).json(err)
    })
}

module.exports = {
    signUp,
    signIn
}