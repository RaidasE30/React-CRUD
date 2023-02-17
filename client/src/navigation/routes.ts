const routes = {
  HomePage: '/',
  HousePage: '/houses/:id',
  HouseCreatePage: '/housecreate',
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
