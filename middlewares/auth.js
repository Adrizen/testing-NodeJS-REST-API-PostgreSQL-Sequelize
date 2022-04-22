const jwt = require('jsonwebtoken');


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
                req.user = decoded;
                next();
            }
        })


    }

}

