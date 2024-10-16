import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskForm = ({ handleCreateTask, newTask, setNewTask }) => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm(!showForm);

    return (
        <>
            <button className="top-right-btn" onClick={toggleForm} aria-label="Add New Task">
                <FontAwesomeIcon icon={faPlus} />
            </button>

            {showForm && (
                <div className="task-manager-wrapper">
                    <form className="task-form" onSubmit={handleCreateTask}>
                        <div className="task-input">
                            <label>Title:</label>
                            <input
                                type="text"
                                placeholder="Task Title"
                                value={newTask.title}
                                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                                required
                            />
                        </div>

                        <div className="task-input">
                            <label>Description:</label>
                            <textarea
                                placeholder="Task Description"
                                value={newTask.description}
                                onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                            />
                        </div>

                        <div className="task-input">
                            <label>Status:</label>
                            <select
                                value={newTask.status}
                                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                            >
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>

                        <div className="actions">
                            <button className="task-btn" type="submit">
                                Add Task
                            </button>
                            <button className="cancel-btn" type="button" onClick={toggleForm}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default TaskForm;
