import { AuthSuccessResponse } from 'auth/types';
import TokenService from 'services/token-service';

export const createAuthSuccessResponse = ({
  password,
  ...user
}: UserEntity): AuthSuccessResponse => {
  const token = TokenService.create({ email: user.email });

  return {
    token,
    user,
  };
};
