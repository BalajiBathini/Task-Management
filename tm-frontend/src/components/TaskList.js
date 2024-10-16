import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faX } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, setSelectedTask, handleDeleteTask }) => {
    const [showModal, setShowModal] = useState(false);
    const [taskIdToDelete, setTaskIdToDelete] = useState(null);

    const confirmDelete = (taskId) => {
        setTaskIdToDelete(taskId);
        setShowModal(true);
    };

    const handleConfirmDelete = () => {
        handleDeleteTask(taskIdToDelete);
        setShowModal(false);
        setTaskIdToDelete(null);
    };

    return (
        <>
            <ul className="task-list">
                {tasks.map((task) => (
                    <li className="task-list-item" key={task.id}>
                        <div>
                            <strong>{task.title}</strong> - {task.description} ({task.status})
                        </div>
                        <div className="task-actions">
                            <button className="edit" onClick={() => setSelectedTask(task)} aria-label="Edit Task">
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>
                            <button 
                                className="delete" 
                                onClick={() => confirmDelete(task.id)} 
                                aria-label="Delete Task">
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {showModal && (
                <div className="modal show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Deletion</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this task?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Yes, Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TaskList;
