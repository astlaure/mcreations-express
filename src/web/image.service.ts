import sharp from 'sharp';

const resizeImage = async (path: string) => {
  sharp(path)
    .resize({ width: 1920, height: 1080, fit: 'inside' })
    .toFile(path);
};

const imageService = {
  resizeImage,
};

export default imageService;
