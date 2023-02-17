import axios from 'axios';
import HouseModel from 'models/house-model';

const BASEURL = 'http://localhost:5024';
const ENDPOINT = '/houses';

const api = axios.create({
  baseURL: BASEURL,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

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
  const { status } = await api.delete(`${ENDPOINT}/${id}`);
};

const ApiService = {
  fetchHouses,
  fetchHouse,
  createHouse,
  deleteHouse,
};

export default ApiService;
