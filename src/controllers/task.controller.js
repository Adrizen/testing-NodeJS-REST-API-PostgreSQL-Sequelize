const Task = require('../models/Tasks');

async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    try {
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
            fields: ['name', 'done', 'projectid']
        });
        if (newTask) {
            res.json({
                "message": 'New task created',
                "data": newTask
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "message": "Something went wrong",
            "data": {}
        });
    }
}

async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid']
        });
        res.json({
            data: tasks
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            "message": "Something went wrong",
            "data": {}
        })
    }
}

async function getOneTask(req, res) {

}

async function deleteTask(req, res) {
    try {
        const { taskID } = req.params;
        const deleteRowCount = await Task.destroy({
            where: {
                id: taskID
            }
        });
        res.json({
            message: `Task with ID ${taskID} has been deleted`
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "message": 'Something went wrong',
            "data": {}
        })

    }
}

async function updateTask(req, res) {

}

async function getTasksByProject(req, res) {
    try {
        const { projectid } = req.params;
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'done', 'name'],
            where: { projectid }
        });
        res.json({ tasks })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            "message": 'Something went wrong',
            "data": {}
        })
    }
}

module.exports = {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updateTask,
    getTasksByProject
}