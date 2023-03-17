const HousePagePath = '/houses/' as const;
const HouseUpdatePagePath = '/houseupdate/' as const;
const routes = {
  HomePage: '/',
  HousePage: {
    routePath: `${HousePagePath}:id`,
    createLink: (id: string) => `${HousePagePath}${id}`,
  },
  HouseUpdatePage: {
    routePath: `${HouseUpdatePagePath}:id`,
    createLink: (id: string) => `${HouseUpdatePagePath}${id}`,
  },
  HouseCreatePage: '/housecreate',
  LoginPage: '/login',
  RegisterPage: '/register',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
