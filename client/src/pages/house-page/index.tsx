import {
  Box, Container, Theme, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import HouseModel from 'models/house-model';
import ApiService from 'services/api-service';
import Img from 'components/ui/img';
import { HouseImgGrid } from './styled';

const HousePage = () => {
  const { id } = useParams();
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  const [house, setHouse] = React.useState<HouseModel | undefined>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedHouse = await ApiService.fetchHouse(id);
        setHouse(fetchedHouse);
      })();
    }
  }, [id]);

  const imageGridArea = (index: number) => {
    if (index === 0 && isSm) {
      return '1 / 1 / 4 / 2';
    } if (index === 1 && isSm) {
      return '1 / 2 / 2 / 3';
    } if (index === 2 && isSm) {
      return '2 / 2 / 4 / 3';
    }
    return 'auto';
  };

  if (house !== undefined) {
    return (
      <Container>
        <Typography component="h3" sx={{ fontWeight: 600, fontSize: '3rem', textAlign: 'center' }}>
          {house.title}
        </Typography>
        <HouseImgGrid>
          {house.images.map((image, index) => (
            <Img key={image} src={image} sx={{ width: 1, gridArea: imageGridArea(index) }} />
          ))}
        </HouseImgGrid>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 5 }}>
          <Typography component="h3" sx={{ fontWeight: 500, fontSize: '2.5rem' }}>
            {`${house.location.city}, ${house.location.country}`}
          </Typography>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '2rem',
            '&:before': { content: '"★"' },
          }}
          >
            {house.rating}
          </Box>
        </Box>
        <Typography component="h3" sx={{ fontWeight: 600, fontSize: '2rem', paddingLeft: 5 }}>
          {`${house.price} night`}
        </Typography>
      </Container>
    );
  }
  return (<Box>Something went wrong! Go back</Box>);
};

export default HousePage;
