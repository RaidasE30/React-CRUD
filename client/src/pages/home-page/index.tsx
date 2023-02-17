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

  const onDelete = (houseId: string) => {
    try {
      setHouses(houses.filter((house) => house.id !== houseId));
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
