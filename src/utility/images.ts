const getPhotoUrl = (name: string) => {
  const n = name.toLowerCase().replace(' ', '_');
  return `dist/photos/${n}.jpg`;
};

export { getPhotoUrl };
