import React, { useRef } from 'react';
import {
  Box, Button, Stack, TextField, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../../house-form-page/styled';
import ErrorSnackbar from '../../../components/ui/error-snackbar';
import { NewUser } from '../types';
import { validateRegisterInputs } from '../helpers';
import apiService from '../../../services/api-service';
import routes from '../../../navigation/routes';

const RegisterPage = () => {
  const [getError, setError] = React.useState<string>('');
  const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);

  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const registerUser = async () => {
    const user: NewUser = {
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      passwordConfirmation: passwordConfirmRef.current?.value || '',
      name: nameRef.current?.value || '',
      surname: surnameRef.current?.value || '',
      mobile: mobileRef.current?.value || '',
    };

    if (!validateRegisterInputs(user)) {
      setError('Bad data');
      setIsSnackbarOpen(true);
      return;
    }

    const payload = JSON.stringify(user);

    try {
      const res = await apiService.registerUser(payload);
      const { token } = res.data;
      const { name } = res.data.user;
      const { id } = res.data.user;
      localStorage.setItem('token', token);
      localStorage.setItem('name', name);
      localStorage.setItem('userId', id);
      navigate(routes.HomePage);
    } catch (err) {
      setError('User does not exist');
      setIsSnackbarOpen(true);
    }
  };
  return (
    <Styled.Container>
      <Box>
        <Styled.Paper elevation={4}>
          <Typography variant="h5" sx={{ textAlign: 'center' }}>Sign Up</Typography>
          <Stack sx={{ gap: 2, mt: 2 }}>
            <TextField label="Email" required inputRef={emailRef} />
            <TextField label="Password" required inputRef={passwordRef} />
            <TextField label="Repeat Password" required inputRef={passwordConfirmRef} />
            <TextField label="Name" required inputRef={nameRef} />
            <TextField label="Surname" required inputRef={surnameRef} />
            <TextField label="Mobile" required inputRef={mobileRef} />
            <Button variant="outlined" size="large" onClick={registerUser}>SIGN UP</Button>
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

export default RegisterPage;
