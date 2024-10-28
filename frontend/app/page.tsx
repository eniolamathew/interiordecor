"use client"
import { useState } from "react";
import Home from "./components/home/Home";
import CarouselData from '../data/CarouselData';
import GradientDivider from "./components/home/subComponents/GradientDivider";
import HomeCarousel from "./components/home/subComponents/HomeCarousel";
import "./globals.css";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/Footer";
import { ICarousel } from "@/models/interface";

interface CarouselImage {
  src: string;
  description: string;
  liked:boolean;
}

interface Carouselfile {
  name: string;
  description: string;
  images: CarouselImage[];
}

export default function Page() {  
  const [carouselData, setCarouselData]= useState<ICarousel[]>(CarouselData)
    
  return (
    <>
      <Home /> 
      <GradientDivider />
      <div className="mt-12"></div>
      <HomeCarousel 
        title="Bedroom"
        autoplay={false}
        setCarouselData={setCarouselData}
        carouselData={carouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "bedroom")}
        draggable={false}
        slidesToShow={window.innerWidth >= 800 ? 6 : 4}
        slidesToScroll={window.innerWidth >= 800 ? 6 : 4}
      />
      <HomeCarousel 
        title="LivingRoom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "livingroom")}
        draggable={false}
        slidesToShow={window.innerWidth >= 800 ? 6 : 4}
        slidesToScroll={window.innerWidth >= 800 ? 6 : 4}
        />
      <HomeCarousel 
        title="Kitchen"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "kitchen")}
        draggable={false}
        slidesToShow={window.innerWidth >= 800 ? 6 : 4}
        slidesToScroll={window.innerWidth >= 800 ? 6 : 4}
        />
      <HomeCarousel 
        title="Bathroom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "bathroom")}
        draggable={false}
        slidesToShow={window.innerWidth >= 800 ? 6 : 4}
        slidesToScroll={window.innerWidth >= 800 ? 6 : 4}
      />
      <FAQ />
      <Footer />
    </>
  );
}