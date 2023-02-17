import React from 'react';
import {
  Box, Button, Rating, Stack, TextField, Typography,
} from '@mui/material';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { useNavigate } from 'react-router-dom';
import ImagesField from './images-field';
import LocationField from './location-field';
import * as Styled from './styled';

const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const country = formData.get('country');
  const city = formData.get('city');

  if (title === null || title instanceof File || title.length < 2) throw new Error('Incorrect title');
  if (price === null || price instanceof File || price.length < 1) throw new Error('Incorrect price');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('Incorrect rating');
  if (country === null || country instanceof File || country.length < 2) throw new Error('Incorrect country');
  if (city === null || city instanceof File || city.length < 2) throw new Error('Incorrect city');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`Incorrect image nr ${i + 1}`);
  });

  return {
    title,
    location: {
      country,
      city,
    },
    images: images as string[],
    price: `${price}€`,
    rating: Number(rating),
  };
};

type HouseFormPageProps = {
  mode?: 'create' | 'edit'
};

const HouseFormPage: React.FC<HouseFormPageProps> = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = JSON.stringify(formatValues(formRef.current));
      const status = await ApiService.createHouse(values);
      if (status === 201) {
        navigate(routes.HomePage);
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  return (
    <Styled.Container>
      <Box component="form" onSubmit={handleSubmit} ref={formRef}>
        <Styled.Paper elevation={4}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>Create House</Typography>
          <Stack sx={{ gap: 2, mt: 2 }}>
            <TextField label="Title" fullWidth name="title" required />
            <LocationField />
            <ImagesField />
            <TextField label="Price" fullWidth name="price" type="number" inputProps={{ step: '0.01' }} required />
            <Box>
              <Typography component="legend">Rating</Typography>
              <Rating name="rating" />
            </Box>
            <Stack>
              <Button type="submit" variant="outlined" size="large">CREATE</Button>
            </Stack>
          </Stack>
        </Styled.Paper>
      </Box>
    </Styled.Container>
  );
};

export default HouseFormPage;
