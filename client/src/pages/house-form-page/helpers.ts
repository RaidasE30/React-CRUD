export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const title = formData.get('title');
  const price = formData.get('price');
  const rating = formData.get('rating');
  const images = formData.getAll('images');
  const country = formData.get('country');
  const city = formData.get('city');

  if (title === null || title instanceof File || title.length < 2) throw new Error('Incorrect title');
  if (price === null || price instanceof File || price.length < 1) throw new Error('Incorrect price');
  if (rating === null || rating instanceof File || rating.length < 1) throw new Error('Incorrect rating');
  if (country === null || country instanceof File || country.length < 2) throw new Error('Incorrect country');
  if (city === null || city instanceof File || city.length < 2) throw new Error('Incorrect city');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`Incorrect image nr ${i + 1}`);
  });

  return {
    title,
    location: {
      country,
      city,
    },
    images: images as string[],
    price: Number(price),
    rating: Number(rating),
  };
};
