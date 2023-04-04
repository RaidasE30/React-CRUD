import React from 'react';
import {
  Box, Stack, Typography,
} from '@mui/material';
import Img from 'components/ui/img';
import HouseModel from 'models/house-model';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import routes from 'navigation/routes';
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
    owner,
  },
  onDelete,
}) => {
  const storedId = localStorage.getItem('userId') || '';
  const isAdminLoggedIn = storedId && parseInt(storedId, 10) === 1;
  const navigate = useNavigate();

  const handleDelete = async (houseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      onDelete(houseId);
    } catch (error) {
      alert(error);
    }
  };

  const handleUpdate = (houseId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(routes.HouseUpdatePage.createLink(houseId));
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <Link to={routes.HousePage.createLink(id)} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Swiper
          effect="slide"
          navigation
          modules={[Navigation]}
          slidesPerView="auto"
          pagination
          loop
        >
          {images.map((img) => (
            <SwiperSlide key={img}>
              <Img src={img} sx={{ aspectRatio: '1.3', width: 1 }} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack>
          { isAdminLoggedIn || owner.id === parseInt(storedId, 10) ? (
            <Styled.AdminActions>
              <Styled.IcoBtn
                onClick={(e) => handleUpdate(id, e)}
              >
                <EditRoundedIcon />
              </Styled.IcoBtn>
              <Styled.IcoBtn
                onClick={(e) => handleDelete(id, e)}
              >
                <ClearRoundedIcon />
              </Styled.IcoBtn>
            </Styled.AdminActions>
          ) : null}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1rem' }}>
              {`${location.city}, ${location.country}`}
            </Typography>
            <Box sx={{ display: 'inline-flex', alignItems: 'flex-end', '&:before': { content: '"★"' } }}>{rating}</Box>
          </Box>
          <Typography component="h4" sx={{ color: 'grey.500', fontSize: '0.8rem' }}>{title}</Typography>
          <Typography component="h3" sx={{ fontWeight: 600, fontSize: '1rem', paddingTop: '0.8rem' }}>
            {`${price} €`}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default HouseCard;
