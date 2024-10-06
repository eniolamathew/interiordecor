"use client";
import React, { ChangeEvent } from "react";
import "./design.css";
import DropdownContainer from "../components/ui/dropdown/DropdownContainer";

interface RoomstyleProps {
  error: string;
  value: string;
  isdisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Roomstyle: React.FC<RoomstyleProps> = ({ error, value, isdisabled, onChange }) => {

  const roomstyle = [
    { value: "Art Deco", display: "Art Deco" },
    { value: "Art Nouveau", display: "Art Nouveau" },
    { value: "Asian Zen", display: "Asian Zen" },
    { value: "Baroque", display: "Baroque" },
    { value: "Biophillic", display: "Biophillic" },
    { value: "Bohemian", display: "Bohemian" },
    { value: "Chalet", display: "Chalet" },
    { value: "Classical", display: "Classical" },
    { value: "Coastal", display: "Coastal" },
    { value: "Colonial", display: "Colonial" },
    { value: "Contemporary", display: "Contemporary" },
    { value: "Cosmic Chic", display: "Cosmic Chic" },
    { value: "Cottagecore", display: "Cottagecore" },
    { value: "Country Rustic", display: "Country Rustic" },
    { value: "Craftsman", display: "Craftsman" },
    { value: "Desert Chic", display: "Desert Chic" },
    { value: "Eco-friendly", display: "Eco-friendly" },
    { value: "Eclectic", display: "Eclectic" },
    { value: "English Cottage", display: "English Cottage" },
    { value: "Farmhouse", display: "Farmhouse" },
    { value: "French Country", display: "French Country" },
    { value: "Futuristic", display: "Futuristic" },
    { value: "Gaming Room", display: "Gaming Room" },
    { value: "Glam", display: "Glam" },
    { value: "Gothic", display: "Gothic" },
    { value: "Grandmillennial", display: "Grandmillennial" },
    { value: "Hollywood Regency", display: "Hollywood Regency" },
    { value: "Industrial", display: "Industrial" },
    { value: "Japandi", display: "Japandi" },
    { value: "Luxury", display: "Luxury" },
    { value: "Mediterranean", display: "Mediterranean" },
    { value: "Mid-Century Modern", display: "Mid-Century Modern" },
    { value: "Minimalist", display: "Minimalist" },
    { value: "Modern", display: "Modern" },
    { value: "Modern Victorian", display: "Modern Victorian" },
    { value: "Monochromatic", display: "Monochromatic" },
    { value: "Mountain Lodge", display: "Mountain Lodge" },
    { value: "Parisian Chic", display: "Parisian Chic" },
    { value: "Retro", display: "Retro" },
    { value: "Renaissance", display: "Renaissance" },
    { value: "Rustic", display: "Rustic" },
    { value: "Scandinavian", display: "Scandinavian" },
    { value: "Shabby Chic", display: "Shabby Chic" },
    { value: "Simple", display: "Simple" },
    { value: "Southwestern", display: "Southwestern" },
    { value: "Space Age", display: "Space Age" },
    { value: "Steampunk", display: "Steampunk" },
    { value: "Traditional", display: "Traditional" },
    { value: "Transitional", display: "Transitional" },
    { value: "Tropical", display: "Tropical" },
    { value: "Tuscan", display: "Tuscan" },
    { value: "Urban Industrial", display: "Urban Industrial" },
    { value: "Urban Modern", display: "Urban Modern" },
    { value: "Vapour Wave", display: "Vapour Wave" },
    { value: "Victorian", display: "Victorian" },
    { value: "Vintage Glam", display: "Vintage Glam" },
    { value: "Wabi-sabi", display: "Wabi-sabi" },
    { value: "Zen", display: "Zen" }
  ];
  
  return (
      <DropdownContainer 
          label={"Style"}
          value={value}
          onChange={onChange}
          disabled={isdisabled}
          options={roomstyle}
          error={error}
      />
);
};

export default Roomstyle;


