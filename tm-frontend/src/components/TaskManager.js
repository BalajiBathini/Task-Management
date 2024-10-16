import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TaskEditModal from './TaskEditModal';
import { createTask, deleteTask, listTasks, updateTask } from '../server/TaskServer';

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'pending',
    });
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        listTasks()
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => console.error('Error fetching tasks:', error));
    }, []);

    const handleCreateTask = (e) => {
        e.preventDefault();
        createTask(newTask)
            .then((response) => {
                setTasks([...tasks, response.data]);
                setNewTask({ title: '', description: '', status: 'pending' });
            })
            .catch((error) => console.error('Error creating task:', error));
    };

    const handleUpdateTask = (task) => {
        // Assuming the updateTask function is correct in TaskServer
        updateTask(task.id, task)
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
        deleteTask(id)
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
