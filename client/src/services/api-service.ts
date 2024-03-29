import axios from 'axios';
import HouseModel from 'models/house-model';

const BASEURL = 'http://localhost:5001/api';
const ENDPOINT = '/houses';
const METHOD = '/auth';

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//
//     return config;
//   },
//
//   (error) => Promise.reject(error),
// );

const fetchHouses = async () => {
  const { data } = await api.get<HouseModel[]>(ENDPOINT);

  return data;
};

const fetchHouse = async (id: string) => {
  const { data } = await api.get<HouseModel>(`${ENDPOINT}/${id}`);

  return data;
};

const createHouse = async (body: string) => {
  const { status } = await api.post<HouseModel>(ENDPOINT, body);

  return status;
};

const deleteHouse = async (id: string) => {
  await api.delete(`${ENDPOINT}/${id}`);
};

const updateHouse = async (id: string, data: string) => {
  const { status } = await api.patch<HouseModel>(`${ENDPOINT}/${id}`, data);

  return status;
};

const loginUser = async (body: string) => api.post(`${METHOD}/login`, body);

const registerUser = async (body: string) => api.post(`${METHOD}/register`, body);

const ApiService = {
  fetchHouses,
  fetchHouse,
  createHouse,
  deleteHouse,
  updateHouse,

  loginUser,
  registerUser,
};

export default ApiService;
