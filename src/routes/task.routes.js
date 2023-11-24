const { Router } = require('express')
// const pool = require('../db/db')
const { getAllTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller')

const router = Router()

router.get('/tasks', getAllTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)


module.exports = router