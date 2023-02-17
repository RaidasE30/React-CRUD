import React from 'react';
import HouseModel from '../models/house-model';
import ApiService from '../services/api-service';

const useHouse = (id: string | undefined) => {
  // const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const [house, setHouse] = React.useState<HouseModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);
        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  return house;
};

export default useHouse;
