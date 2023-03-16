type HouseModel = {
  id: string,
  title: string,
  location: {
    country: string,
    city: string
  },
  images: strin[],
  price: number,
  rating: number,
  owner: {
    id: number,
    name: string,
    surname: string,
    email: string,
    mobile: string,
  }
};

export default HouseModel;
