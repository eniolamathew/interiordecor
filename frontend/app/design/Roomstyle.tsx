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
    { value: "Biophilic", display: "Biophilic" },
    { value: "Biophillic", display: "Biophillic" },
    { value: "Bohemian", display: "Bohemian" },
    { value: "Coastal", display: "Coastal" },
    { value: "Contemporary", display: "Contemporary" },
    { value: "Cosmic Chic", display: "Cosmic Chic" },
    { value: "Cottagecore", display: "Cottagecore" },
    { value: "Eco-friendly", display: "Eco-friendly" },
    { value: "Farmhouse", display: "Farmhouse" },
    { value: "French Country", display: "French Country" },
    { value: "Gaming Room", display: "Gaming Room" },
    { value: "Gothic", display: "Gothic" },
    { value: "Hollywood Regency", display: "Hollywood Regency" },
    { value: "Industrial", display: "Industrial" },
    { value: "Japandi", display: "Japandi" },
    { value: "Luxury", display: "Luxury" },
    { value: "Mediterranean", display: "Mediterranean" },
    { value: "Mid-Century Modern", display: "Mid-Century Modern" },
    { value: "Minimalist", display: "Minimalist" },
    { value: "Modern", display: "Modern" },
    { value: "Rustic", display: "Rustic" },
    { value: "Scandinavian", display: "Scandinavian" },
    { value: "Shabby Chic", display: "Shabby Chic" },
    { value: "Simple", display: "Simple" },
    { value: "Traditional", display: "Traditional" },
    { value: "Transitional", display: "Transitional" },
    { value: "Tropical", display: "Tropical" },
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


