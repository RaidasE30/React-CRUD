import { NewUser, User } from './types';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.*[^\da-zA-Z]).{8,}$/;
const nameSurnameRegex = /^[A-Za-z]{3,30}$/;
const mobileRegex = /^\+[0-9]{11}$/;

export const validateLoginInputs = (user: User): boolean => (
  emailRegex.test(user.email) && passwordRegex.test(user.password)
);

export const validateRegisterInputs = (newUser: NewUser): boolean => emailRegex.test(newUser.email)
      && passwordRegex.test(newUser.password)
      && newUser.password === newUser.passwordConfirmation
      && nameSurnameRegex.test(newUser.name)
      && nameSurnameRegex.test(newUser.surname)
      && mobileRegex.test(newUser.mobile);
