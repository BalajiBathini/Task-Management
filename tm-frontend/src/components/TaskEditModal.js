import React from 'react';

const TaskEditModal = ({ selectedTask, setSelectedTask, handleUpdateTask }) => {
    if (!selectedTask) return null;

    const closeModal = () => setSelectedTask(null);

    return (
        <div className="task-form-container">
            <div className="edit-task-form">
                <h2>Edit Task</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleUpdateTask(selectedTask);
                    }}
                >
                    <div className="task-input">
                        <label>Title:</label>
                        <input
                            type="text"
                            value={selectedTask.title}
                            onChange={(e) =>
                                setSelectedTask({ ...selectedTask, title: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div className="task-input">
                        <label>Description:</label>
                        <textarea
                            value={selectedTask.description}
                            onChange={(e) =>
                                setSelectedTask({ ...selectedTask, description: e.target.value })
                            }
                        />
                    </div>
                    <div className="task-input">
                        <label>Status:</label>
                        <select
                            value={selectedTask.status}
                            onChange={(e) =>
                                setSelectedTask({ ...selectedTask, status: e.target.value })
                            }
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="actions">
                        <button type="submit" className="task-btn">
                            Save Changes
                        </button>
                        <button type="button" className="cancel-btn" onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TaskEditModal;
