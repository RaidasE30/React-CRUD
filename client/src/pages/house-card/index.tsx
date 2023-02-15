import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Img from 'components/ui/img';
import HouseModel from 'models/house-model';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

type HouseCardProps = HouseModel;

SwiperCore.use([Pagination]);

const HouseCard: React.FC<HouseCardProps> = ({
  id,
  images,
  location,
  rating,
  title,
  price,
}) => (
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
);

export default HouseCard;
