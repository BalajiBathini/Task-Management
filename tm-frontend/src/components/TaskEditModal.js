import React from 'react';

const TaskEditModal = ({ selectedTask, setSelectedTask, handleUpdateTask }) => {
    if (!selectedTask) return null;

    const closeModal = () => setSelectedTask(null);

    return (
        <div className="task-from-container">
            <div className="edit-task-form">
                <h2>Edit Task</h2>
                <input
                    type="text"
                    value={selectedTask.title}
                    onChange={(e) =>
                        setSelectedTask({ ...selectedTask, title: e.target.value })
                    }
                />
                <textarea
                    value={selectedTask.description}
                    onChange={(e) =>
                        setSelectedTask({
                            ...selectedTask,
                            description: e.target.value,
                        })
                    }
                />
                <select
                    value={selectedTask.status}
                    onChange={(e) =>
                        setSelectedTask({ ...selectedTask, status: e.target.value })
                    }
                >
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>

                <button onClick={() => handleUpdateTask(selectedTask)}>
                    Update Task
                </button>
                <button className="cancelbtn" onClick={closeModal}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default TaskEditModal;
