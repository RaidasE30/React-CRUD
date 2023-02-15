import axios from 'axios';
import HouseModel from 'models/house-model';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const fetchHouses = async () => {
  const { data } = await api.get<HouseModel[]>('/houses');

  return data;
};

const fetchHouse = async (id: string) => {
  const { data } = await api.get<HouseModel>(`/houses/${id}`);

  return data;
};

const ApiService = {
  fetchHouses,
  fetchHouse,
};

export default ApiService;
