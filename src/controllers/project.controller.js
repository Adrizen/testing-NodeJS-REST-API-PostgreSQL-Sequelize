const Project = require('../models/Projects');

async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name', 'priority', 'description', 'deliverydate']
        })
        if (newProject) {
            res.json({
                "message": 'Project created successfully.',
                "data": newProject
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }

}

async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            data: projects
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }
}

async function getOneProject(req, res) {
    try {
        const { projectID } = req.params;
        const project = await Project.findOne({
            where: {
                id: projectID
            }
        });
        res.json({
            data: project
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }
}

async function deleteOneProject(req, res) {
    try {
        const { projectID } = req.params;
        const deleteRowCount = await Project.destroy({  // returns how many rows have been deleted.
            where: {
                id: projectID
            }
        });
        res.json({
            message: `Project with ID ${projectID} has been deleted`
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }
}

async function updateProject(req, res) {
    try {
        const { projectID } = req.params;
        const { name, priority, description, deliverydate } = req.body;

        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description', 'deliverydate'],
            where: {
                id: projectID
            }
        })
        if (projects.length > 0) {
            projects.forEach(async project => {
                await project.update({
                    name,
                    priority,
                    description,
                    deliverydate
                });
            });
        }

        res.json({
            message: `Project with ID ${projectID} has been updated`,
            data: projects
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": 'Something went wrong.',
            "data": {}
        })
    }
}

module.exports = {
    createProject,
    getProjects,
    getOneProject,
    deleteOneProject,
    updateProject
}
