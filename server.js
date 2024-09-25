const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

let tasks = [
    { text: 'Example Task 1', completed: false },
    { text: 'Example Task 2', completed: true }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '.'))); // Serve the HTML and JS

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const task = req.body;
    tasks.push(task);
    res.json({ message: 'Task added successfully!' });
});

// Get a single task
app.get('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    res.json(tasks[taskId]);
});

// Update a task
app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks[taskId] = req.body;
    res.json({ message: 'Task updated successfully!' });
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    tasks.splice(taskId, 1);
    res.json({ message: 'Task deleted successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
