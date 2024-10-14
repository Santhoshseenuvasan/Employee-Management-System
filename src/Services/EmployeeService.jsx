import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8555/createTable';
const REST_API_BASE_URLL = 'http://localhost:8555/addStudent';
const REST_API_BASE_URLLL = 'http://localhost:8555/getStudent';
const REST_API_BASE_URR = 'http://localhost:8555/deleteStudent';
export const listEmployees = () =>  axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URLL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URLLL + '/' + employeeId);

export const updateEmployee = (employeeId,employee) => axios.put(REST_API_BASE_URL + '/' + employeeId,employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URR + '/' + employeeId) 