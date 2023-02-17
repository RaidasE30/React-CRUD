import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const LocationField = () => {
  const test = 'test';

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pl: 1 }}>Location</Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <TextField label="Country" fullWidth name="country" required />
        <TextField label="City" fullWidth name="city" required />
      </Box>
    </Box>
  );
};

export default LocationField;
