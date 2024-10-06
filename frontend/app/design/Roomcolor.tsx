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
    { value: "Almond", display: "Almond" },
    { value: "Aqua Blue", display: "Aqua Blue" },
    { value: "Baby Blue", display: "Baby Blue" },
    { value: "Beige", display: "Beige" },
    { value: "Black", display: "Black" },
    { value: "Blush Pink", display: "Blush Pink" },
    { value: "Burnt Orange", display: "Burnt Orange" },
    { value: "Canary Yellow", display: "Canary Yellow" },
    { value: "Caramel", display: "Caramel" },
    { value: "Charcoal Gray", display: "Charcoal Gray" },
    { value: "Cherry Red", display: "Cherry Red" },
    { value: "Cobalt Blue", display: "Cobalt Blue" },
    { value: "Cool White", display: "Cool White" },
    { value: "Coral", display: "Coral" },
    { value: "Cream", display: "Cream" },
    { value: "Crimson", display: "Crimson" },
    { value: "Deep Burgundy", display: "Deep Burgundy" },
    { value: "Dusty Rose", display: "Dusty Rose" },
    { value: "Eggshell White", display: "Eggshell White" },
    { value: "Emerald Green", display: "Emerald Green" },
    { value: "Flamingo Pink", display: "Flamingo Pink" },
    { value: "Forest Green", display: "Forest Green" },
    { value: "Fuchsia", display: "Fuchsia" },
    { value: "Gold", display: "Gold" },
    { value: "Gray", display: "Gray" },
    { value: "Greige", display: "Greige" },
    { value: "Ivory", display: "Ivory" },
    { value: "Lavender", display: "Lavender" },
    { value: "Lemon Yellow", display: "Lemon Yellow" },
    { value: "Light Coral", display: "Light Coral" },
    { value: "Lilac", display: "Lilac" },
    { value: "Magenta", display: "Magenta" },
    { value: "Maroon", display: "Maroon" },
    { value: "Midnight Black", display: "Midnight Black" },
    { value: "Mint Green", display: "Mint Green" },
    { value: "Mocha", display: "Mocha" },
    { value: "Mustard Yellow", display: "Mustard Yellow" },
    { value: "Navy Blue", display: "Navy Blue" },
    { value: "Olive Green", display: "Olive Green" },
    { value: "Orange", display: "Orange" },
    { value: "Pale Lavender", display: "Pale Lavender" },
    { value: "Pale Yellow", display: "Pale Yellow" },
    { value: "Peach", display: "Peach" },
    { value: "Platinum", display: "Platinum" },
    { value: "Powder Blue", display: "Powder Blue" },
    { value: "Rose Pink", display: "Rose Pink" },
    { value: "Ruby Red", display: "Ruby Red" },
    { value: "Rust", display: "Rust" },
    { value: "Sage Green", display: "Sage Green" },
    { value: "Sky Blue", display: "Sky Blue" },
    { value: "Soft Pink", display: "Soft Pink" },
    { value: "Steel Blue", display: "Steel Blue" },
    { value: "Taupe", display: "Taupe" },
    { value: "Teal", display: "Teal" },
    { value: "Terracotta", display: "Terracotta" },
    { value: "Turquoise", display: "Turquoise" },
    { value: "Warm White", display: "Warm White" },
    { value: "Wine Red", display: "Wine Red" }
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