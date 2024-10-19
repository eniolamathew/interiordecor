import carouselsData from './carousels.json';

interface Image {
  src: string;
  description: string;
  liked: boolean;
}

interface Carousel {
  name: string;
  description: string;
  images: Image[];
}

interface CarouselsData {
  carousels: Carousel[];
}

const CarouselData = (): Carousel[] => {
  let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD;
  
  const updatedData = (carouselsData as CarouselsData).carousels.map(carousel => {
    const updatedImages = carousel.images.map(image => ({ ...image, src: `${url}/${image.src}`}));
        return { ...carousel, images: updatedImages};
    });

    return updatedData;
}

export default CarouselData;