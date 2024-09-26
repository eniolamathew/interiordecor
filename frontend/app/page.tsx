"use client"
import { useState } from "react";
import Home from "./components/home/Home";
import carouselsData from '../data/carousels.json';
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
  const [carouselData, setCarouselData]= useState<ICarousel[]>(carouselsData.carousels)
    
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
      />
      <HomeCarousel 
        title="LivingRoom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "livingroom")}
      />
      <HomeCarousel 
        title="Kitchen"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "kitchen")}
      />
      <HomeCarousel 
        title="Bathroom"
        autoplay={false}
        carouselData={carouselData}
        setCarouselData={setCarouselData}
        carousel={carouselData!.filter(x => x.name.toLowerCase() === "bathroom")}
      />
      <FAQ />
      <Footer />
    </>
  );
}