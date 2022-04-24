const jwt = require('jsonwebtoken');
const User = require('../src/models/User')
const Role = require('../src/models/Role');
let flag = false;

module.exports = (req, res, next) => {
    console.log(req.headers);

    // Check if the token exists.
    if (!req.headers.authorization) {
        res.status(401).json({
            msg: "Unauthorized access"
        })
    } else {
        // Check token validity
        // We split the string "Bearer [token]" into an array and analize the [token]
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, "secret", (err, decoded) => {
            if (err) {
                res.status(500).json({
                    msg: "There was an error trying to decode the token.", err
                })
            } else {
                if (!flag) {    // If I don't do this, then the following error with Sequelize will appear:You have used the alias roles in two separate associations. Aliased associations must have unique aliases
                    User.belongsToMany(Role, {  as: "roles",  through: "user_role"  , foreignKey: "user_id"  });
                    flag = true;
                }
                
                // I needed to include the later to make it work. Even if the same line is in Models.Users.
                User.findByPk(decoded.user.id,  { include: "roles" }  ).then(user => {
                    req.user = user;
                    //console.log(user.roles)
                    next();
                })
            }
        })


    }

}

