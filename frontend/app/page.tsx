"use client"
import React, { useState, useEffect } from 'react';
import Home from "./components/home/Home";
import CarouselData from '../data/CarouselData';
import GradientDivider from "./components/home/subComponents/GradientDivider";
import HomeCarousel from "./components/home/subComponents/HomeCarousel";
import "./globals.css";
import FAQ from "./components/faq/faq";
import Footer from "./components/footer/Footer";
import { ICarousel } from "@/models/interface";
import Framer from "./components/frame/Framer";

interface CarouselImage {
  src: string;
  smallImage: string;
  imagedescription: string;
  liked:boolean;
}

interface Carouselfile {
  name: string;
  label: string;
  images: CarouselImage[];
}

export default function Page() {  
  const [carouselData, setCarouselData]= useState<ICarousel[]>(CarouselData)
  const [slides, setSlides] = useState<number>(6);

  useEffect(() => {
    const handleResize = () => { 
      if(window?.innerWidth >= 800){ setSlides(6) }
      else { setSlides(4) } 
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);   
    
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
        slidesToShow={slides}
        slidesToScroll={slides}
      />
      <HomeCarousel 
        title="LivingRoom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "livingroom")}
        draggable={false}
        slidesToShow={slides}
        slidesToScroll={slides}
      />
      <HomeCarousel 
        title="Kitchen"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "kitchen")}
        draggable={false}
        slidesToShow={slides}
        slidesToScroll={slides}
        />
      <HomeCarousel 
        title="Bathroom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "bathroom")}
        draggable={false}
        slidesToShow={slides}
        slidesToScroll={slides}
      /> 
      <Framer />
      <FAQ />
      <Footer />
    </>
  );
}