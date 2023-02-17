import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'navigation/routes';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="header"
      sx={{ py: 2, textAlign: 'right' }}
      onClick={() => navigate(routes.HouseCreatePage)}
    >
      <Button variant="outlined" size="large">ADD HOUSE</Button>
    </Box>
  );
};

export default Header;
