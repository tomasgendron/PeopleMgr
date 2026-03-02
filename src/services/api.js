import axios from 'axios';

const API_URL = 'https://sampleapp01-gkh4gehxeygca9cs.canadacentral-01.azurewebsites.net';

export const getPeople = () => {
  return axios.get(`${API_URL}/people/`);
};

export const getPerson = (id) => {
  return axios.get(`${API_URL}/people/${id}`);
};

export const createPerson = (data) => {
  return axios.post(`${API_URL}/people/`, data);
};

export const updatePerson = (id, data) => {
  return axios.put(`${API_URL}/people/${id}`, data);
};

export const deletePerson = (id) => {
  return axios.delete(`${API_URL}/people/${id}`);
};
