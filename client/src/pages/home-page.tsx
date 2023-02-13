import React from 'react';
import { Box } from '@mui/material';
import HouseModel from 'models/house-model';
import ApiService from 'services/api-service';

const HomePage = () => {
  const [houses, setHouses] = React.useState<HouseModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await ApiService.fetchHouses();
      setHouses(fetchedHouses);
    })();
  }, []);

  return (
    <Box>
      <Box component="pre">
        {JSON.stringify(houses, null, 4)}
      </Box>
    </Box>
  );
};

export default HomePage;
