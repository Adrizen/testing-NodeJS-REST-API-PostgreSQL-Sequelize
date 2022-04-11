const Project = require('../models/Projects');

function createProject(req, res) {  
    console.log(req.body);
    //const {name, priority, description, deliverydate} = req.body;
    res.send('received');
}

module.exports = createProject;