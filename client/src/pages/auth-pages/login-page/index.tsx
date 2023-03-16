import React, { useRef } from 'react';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../../house-form-page/styled';
import ErrorSnackbar from '../../../components/ui/error-snackbar';
import { User } from '../types';
import { validateInput } from '../helpers';
import apiService from '../../../services/api-service';

const LoginPage = () => {
  const [getError, setError] = React.useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const redirect = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const loginUser = async () => {
    const user: User = {
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
    };

    if (!validateInput(user)) {
      setError('Bad credentials');
      setIsSnackbarOpen(true);
      return;
    }

    const payload = JSON.stringify(user);

    try {
      const res = await apiService.loginUser(payload);
      const { token } = res.data;
      localStorage.setItem('token', token);
      redirect('/');
    } catch (err) {
      setError('User does not exist');
      setIsSnackbarOpen(true);
    }
  };

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <Styled.Container>
      <Box>
        <Styled.Paper elevation={4}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>Login</Typography>
          <Stack sx={{ gap: 2, mt: 2 }}>
            <TextField label="Email" required inputRef={emailRef} />
            <TextField label="Password" required inputRef={passwordRef} />
            <Button variant="outlined" size="large" onClick={loginUser}>LOGIN</Button>
          </Stack>
        </Styled.Paper>
      </Box>
      {
        getError
          && (
          <ErrorSnackbar
            message={getError}
            open={isSnackbarOpen}
            onClose={closeSnackbar}
          />
          )
      }
    </Styled.Container>
  );
};

export default LoginPage;
