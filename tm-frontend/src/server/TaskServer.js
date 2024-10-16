import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/tasks';

export const listTasks = () => {
    return axios.get(REST_API_BASE_URL);
};

export const createTask = (task) => {
    return axios.post(REST_API_BASE_URL, task);
};

export const getTask = (taskId) => {
    return axios.get(`${REST_API_BASE_URL}/${taskId}`);
};

export const updateTask = (taskId, task) => {
    return axios.put(`${REST_API_BASE_URL}/${taskId}`, task);
};

export const deleteTask = (taskId) => {
    return axios.delete(`${REST_API_BASE_URL}/${taskId}`);
};
