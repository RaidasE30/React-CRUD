import React from 'react';
import {
  Box, IconButton, InputAdornment, Stack, TextField, Typography,
} from '@mui/material';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import uniqid from 'uniqid';

const initImagesId: string[] = [uniqid()];

const ImagesField = () => {
  const [imagesIds, setImagesIds] = React.useState<string[]>(initImagesId);

  const addImageField = () => setImagesIds([...imagesIds, uniqid()]);
  const removeImageField = (id: string) => setImagesIds(imagesIds.filter((imgId) => imgId !== id));

  return (
    <Box>
      <Typography variant="subtitle1" sx={{ pl: 1 }}>Images</Typography>
      <Stack sx={{ gap: 2 }}>
        {imagesIds.map((id) => (
          <TextField
            key={id}
            name="images"
            label="Image"
            fullWidth
            InputProps={imagesIds.length > 1 ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => removeImageField(id)}>
                    <ClearRoundedIcon />
                  </IconButton>
                </InputAdornment>
              ),
            } : undefined}
          />
        ))}

      </Stack>
      <IconButton onClick={addImageField}>
        <AddRoundedIcon />
      </IconButton>
    </Box>
  );
};

export default ImagesField;
