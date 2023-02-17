import React from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import Img from 'components/ui/img';
import HouseModel from 'models/house-model';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ApiService from 'services/api-service';
import * as Styled from './styled';

type HouseCardProps = {
  house: HouseModel;
  onDelete: (id: string) => void;
};

SwiperCore.use([Pagination]);

const HouseCard: React.FC<HouseCardProps> = ({
  house: {
    id,
    images,
    location,
    rating,
    title,
    price,
  },
  onDelete,
}) => {
  const handleDelete = async (houseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await ApiService.deleteHouse(houseId);
      onDelete(id);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Link to={`/houses/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Swiper
          effect="slide"
          navigation
          modules={[Navigation]}
          slidesPerView="auto"
          pagination
          loop
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} sx={{ aspectRatio: '1.3', width: 1 }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack>
          <Styled.AdminActions>
            <Styled.IcoBtn><EditRoundedIcon /></Styled.IcoBtn>
            <Styled.IcoBtn onClick={(e) => handleDelete(id, e)}><ClearRoundedIcon /></Styled.IcoBtn>
          </Styled.AdminActions>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1rem' }}>
              {`${location.city}, ${location.country}`}
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'flex-end', '&:before': { content: '"★"' } }}>{rating}</Box>
          </Box>
          <Typography component="h4" sx={{ color: 'grey.500', fontSize: '0.8rem' }}>{title}</Typography>
          <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1rem', paddingTop: '0.8rem' }}>
            {`${price} night`}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default HouseCard;
