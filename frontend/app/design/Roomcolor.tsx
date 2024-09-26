"use client";
import React, { ChangeEvent } from "react";
import "./design.css";
import DropdownContainer from "../components/ui/dropdown/DropdownContainer";

interface RoomcolorProps {
  error: string;
  color: string;
  isdisabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Roomcolor: React.FC<RoomcolorProps> = ({ error, color, isdisabled, onChange }) => {

  const roomwallcolor = [
    { value: "Baby Blue", display: "Baby Blue" },
    { value: "Beige", display: "Beige" },
    { value: "Burnt Orange", display: "Burnt Orange" },
    { value: "Charcoal Gray", display: "Charcoal Gray" },
    { value: "Cobalt Blue", display: "Cobalt Blue" },
    { value: "Cool White", display: "Cool White" },
    { value: "Coral", display: "Coral" },
    { value: "Cream", display: "Cream" },
    { value: "Deep Burgundy", display: "Deep Burgundy" },
    { value: "Emerald Green", display: "Emerald Green" },
    { value: "Forest Green", display: "Forest Green" },
    { value: "Gold", display: "Gold" },
    { value: "Gray", display: "Gray" },
    { value: "Greige", display: "Greige" },
    { value: "Light Coral", display: "Light Coral" },
    { value: "Midnight Black", display: "Midnight Black" },
    { value: "Mint Green", display: "Mint Green" },
    { value: "Mustard Yellow", display: "Mustard Yellow" },
    { value: "Navy Blue", display: "Navy Blue" },
    { value: "Olive Green", display: "Olive Green" },
    { value: "Pale Lavender", display: "Pale Lavender" },
    { value: "Peach", display: "Peach" },
    { value: "Sage Green", display: "Sage Green" },
    { value: "Soft Pink", display: "Soft Pink" },
    { value: "Taupe", display: "Taupe" },
    { value: "Teal", display: "Teal" },
    { value: "Terracotta", display: "Terracotta" },
    { value: "Turquoise", display: "Turquoise" },
    { value: "Warm White", display: "Warm White" }
  ];  

  return (
      <DropdownContainer 
          label={"Colour"}
          value={color}
          onChange={onChange}
          disabled={isdisabled}
          options={roomwallcolor}
          error={error}
      />
);
};

export default Roomcolor;


