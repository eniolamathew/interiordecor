"use client";
import React, { useState } from "react";
import "./design.css";
import Image from "next/image";

interface RoomtypeProps {
  error: string;
  disable: boolean
  handleRoomChange: (room: string) => void;
}

const Roomtype: React.FC<RoomtypeProps> = ({ error, disable, handleRoomChange }) => {
  const [selectedRoom, setSelectedRoom] = useState<{id: string, label: string} | null>(null);

  const rooms = [
    { id: "livingroom", label: "Living room", src:"https://roomify.org/couch-solid.svg" },
    { id: "Bedroom", label: "Bedroom", src:"https://roomify.org/bed-solid.svg" },
    { id: "kitchen", label: "Kitchen", src:"https://roomify.org/kitchen-set-solid.svg" },
    { id: "diningroom", label: "Dining room", src:"https://roomify.org/utensils-solid.svg" },
    { id: "toilet", label: "Toilet", src:"https://roomify.org/toilet-solid.svg"  },
    { id: "homeOffice", label: "Home Office", src:"https://roomify.org/house-laptop-solid.svg" },
    { id: "kid'sroom", label: "Kid's room", src:"https://roomify.org/child-solid.svg"},
    { id: "mediaroom", label: "Media room", src:"https://roomify.org/soundcloud-brands-solid.svg"},
    { id: "patio", label: "Patio", src:"https://roomify.org/house-solid.svg" },
    { id: "homegym", label: "Home Gym", src:"https://roomify.org/dumbbell-solid.svg" },
    { id: "lundryroom", label: "Lundry room", src:"https://roomify.org/shirt-solid.svg" },
    { id: "gamming", label: "Gaming", src:"https://roomify.org/people-roof-solid.svg" },
  ];

  const handleSelect = (item: { id: string; label: string }) => {
    setSelectedRoom(item);
    handleRoomChange(item.id);
  };

  return (<>
    <div className="roomtype">
      <div className="flex items-center">
        <Image 
            className="imageIcon" 
            alt="icon" 
            src={"https://roomify.org/sliders-solid.svg"}
            width={15}
            height={15}
            style={{ 
                maxWidth: "15px", 
                maxHeight: "15px", 
                filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"
            }}
        /><span className="ml-3">Room</span></div>
      <div className="m-0 mt-3 flex flex-wrap">
        {rooms.map((item) => (
          <div
            key={item.id}
            className={`p-1 w-full md:w-1/2 flex flex-col cursor-pointer `}
            onClick={() => { if (!disable) { handleSelect(item) } }}
          >
            <div
              className={`roomfield ${
                selectedRoom && selectedRoom!.id === item.id
                  ? "backgroundcolor"
                  : ""
              } `}
            >
              <span className="icon ">
                <Image 
                    className="roomIcon" 
                    alt="icon" 
                    src={item.src}
                    width={15}
                    height={15}
                    style={{ 
                        maxWidth: "15px", 
                        maxHeight: "15px", 
                        filter: "brightness(0) saturate(100%) invert(98%) sepia(78%) saturate(155%) hue-rotate(164deg) brightness(62%) contrast(100%)"
                    }}
                />
              </span>
              <div className="border-left">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="roomError">{error}</div>
</>);
};

export default Roomtype;