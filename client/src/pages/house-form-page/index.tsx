import React from 'react';
import {
  Box, Button, Rating, Stack, TextField, Typography,
} from '@mui/material';
import ApiService from 'services/api-service';
import routes from 'navigation/routes';
import { useNavigate, useParams } from 'react-router-dom';
import useHouse from 'hooks/useHouse';
import ImagesField from './images-field';
import LocationFields from './location-fields';
import * as Styled from './styled';
import { buttonMap, titleMap } from './data';
import { formatValues } from './helpers';

type HouseFormPageProps = {
  mode?: 'create' | 'update'
};

const HouseFormPage: React.FC<HouseFormPageProps> = ({
  mode = 'create',
}) => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const house = useHouse(id);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = JSON.stringify(formatValues(formRef.current));
      if (mode === 'update' && id !== undefined) {
        const updateResponseStatus = await ApiService.updateHouse(id, values);
        if (updateResponseStatus === 200) {
          navigate(routes.HomePage);
        }
      } else {
        const createResponseStatus = await ApiService.createHouse(values);
        if (createResponseStatus === 201) {
          navigate(routes.HomePage);
        }
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : error);
    }
  };

  if (mode === 'update' && house === undefined) return null;

  return (
    <Styled.Container>
      <Box component="form" onSubmit={handleSubmit} ref={formRef}>
        <Styled.Paper elevation={4}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{titleMap[mode]}</Typography>
          <Stack sx={{ gap: 2, mt: 2 }}>
            <TextField label="Title" fullWidth name="title" required defaultValue={house?.title} />
            <LocationFields
              defaultCountry={house?.location.country}
              defaultCity={house?.location.city}
            />
            <ImagesField defaultImages={house?.images} />
            <TextField label="Price" fullWidth name="price" type="number" inputProps={{ step: '0.01' }} required defaultValue={house?.price.slice(0, -1)} />
            <Box>
              <Typography component="legend" defaultValue={house?.rating}>Rating</Typography>
              <Rating name="rating" defaultValue={house?.rating} />
            </Box>
            <Stack>
              <Button type="submit" variant="outlined" size="large">{buttonMap[mode]}</Button>
            </Stack>
          </Stack>
        </Styled.Paper>
      </Box>
    </Styled.Container>
  );
};

export default HouseFormPage;
