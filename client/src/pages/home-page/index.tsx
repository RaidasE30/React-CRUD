import React from 'react';
import HouseModel from 'models/house-model';
import ApiService from 'services/api-service';
import { Container } from '@mui/material';
import HouseCard from '../house-card';
import { HouseCardGrid } from './styled';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Container>
      <HouseCardGrid>
        {houses.map((house) => <HouseCard key={house.id} {...house} />)}
      </HouseCardGrid>
    </Container>
  );
};

export default HomePage;
