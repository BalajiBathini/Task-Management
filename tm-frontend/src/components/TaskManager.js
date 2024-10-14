
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskEditModal from './TaskEditModal';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'pending',
    });
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8081/api/tasks')
            .then((response) => setTasks(response.data))
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const handleCreateTask = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8081/api/tasks', newTask)
            .then((response) => {
                setTasks([...tasks, response.data]);
                setNewTask({ title: '', description: '', status: 'pending' });
            })
            .catch((error) => console.error('Error creating task:', error));
    };

    const handleUpdateTask = (task) => {
        axios
            .put(`http://localhost:8081/api/tasks/${task.id}`, task)
            .then((response) => {
                const updatedTasks = tasks.map((t) =>
                    t.id === task.id ? response.data : t
                );
                setTasks(updatedTasks);
                setSelectedTask(null);
            })
            .catch((error) => console.error('Error updating task:', error));
    };

    const handleDeleteTask = (id) => {
        axios
            .delete(`http://localhost:8081/api/tasks/${id}`)
            .then(() => {
                setTasks(tasks.filter((task) => task.id !== id));
            })
            .catch((error) => console.error('Error deleting task:', error));
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskForm
                handleCreateTask={handleCreateTask}
                newTask={newTask}
                setNewTask={setNewTask}
            />
            <TaskList
                tasks={tasks}
                setSelectedTask={setSelectedTask}
                handleDeleteTask={handleDeleteTask}
            />
            <TaskEditModal
                selectedTask={selectedTask}
                setSelectedTask={setSelectedTask}
                handleUpdateTask={handleUpdateTask}
            />
        </div>
    );
};

export default TaskManager;
