import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

type LocationFieldsProps = {
  defaultCountry?: string,
  defaultCity?: string,
};

const LocationFields: React.FC<LocationFieldsProps> = ({
  defaultCountry,
  defaultCity,
}) => (
  <Box>
    <Typography variant="subtitle1" sx={{ pl: 1 }}>Location</Typography>
    <Box sx={{ display: 'flex', gap: 2 }}>
      <TextField
        label="Country"
        fullWidth
        name="country"
        required
        defaultValue={defaultCountry}
      />
      <TextField
        label="City"
        fullWidth
        name="city"
        required
        defaultValue={defaultCity}
      />
    </Box>
  </Box>
);

export default LocationFields;
