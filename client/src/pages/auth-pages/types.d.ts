export type User = {
  email: string,
  password: string,
};

export type NewUser = User & {
  passwordConfirmation: string,
  name: string,
  surname: string,
  mobile: string
};
