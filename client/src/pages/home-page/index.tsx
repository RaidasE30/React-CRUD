import React from 'react';
import HouseModel from 'models/house-model';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import HouseCard from '../house-card';
import { HouseCardGrid } from './styled';
import Header from '../house-card/header';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  const onDelete = async (houseId: string) => {
    try {
      await ApiService.deleteHouse(houseId);
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Header />
      <HouseCardGrid>
        {houses.map((house) => <HouseCard key={house.id} house={house} onDelete={onDelete} />)}
      </HouseCardGrid>
    </Container>
  );
};

export default HomePage;
