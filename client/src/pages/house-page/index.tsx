import {
  Box, Container, Theme, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Img from 'components/ui/img';
import useHouse from 'hooks/useHouse';
import routes from 'navigation/routes';
import { HouseImgGrid } from './styled';

const HousePage = () => {
  const { id } = useParams();
  const house = useHouse(id);
  const isSm = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

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

  if (id === undefined) return <Navigate to={routes.HomePage} />;

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
          {`${house.price} €`}
        </Typography>
      </Container>
    );
  } return <Box>Something went wrong. Go back!</Box>;
};

export default HousePage;
