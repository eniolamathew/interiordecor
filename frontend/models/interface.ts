import { HTMLAttributes } from "react";

export interface ICarouselImage {
  src: string;
  smallImage: string;
  imagedescription: string;
  liked: boolean;
}

export interface ICarousel {
  name: string;
  label: string;
  images: ICarouselImage[];
}

export interface CarouselsData {
  carousels: ICarousel[];
}

export interface ICarouselProps extends HTMLAttributes<HTMLElement> {
  name: string;
  autoplay: boolean;
  draggable: boolean;
  mousePosition: { x: number; y: number } | null;
  hasDots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
}