"use client"
import React, { HTMLAttributes, useState, useEffect, useCallback } from 'react';
import Glider from 'react-glider';
import styled from 'styled-components';
import "glider-js/glider.min.css";
import SliderModal from '../ui/modal/SlideModal';
import { debounce } from '../../../shared/hook/debounce';
import { ICarouselImage, ICarousel } from '../../../models/interface';
import { useAuth } from "../../../shared/context/AuthContext";
import Image from 'next/image';

export interface ICarouselProps extends HTMLAttributes<HTMLElement> {
    name: string;
    autoplay: boolean;
    draggable:boolean;
    mousePosition:{ x: number, y: number } | null;
    hasDots?: boolean;
    slidesToShow?: number;
    slidesToScroll?: number;
    carouselData: ICarousel[];
    setCarouselData: React.Dispatch<React.SetStateAction<ICarousel[]>>;
}

interface ICarouselHolder extends React.HTMLAttributes<HTMLDivElement> {
    $visible: boolean;
    $isLightMode: boolean;
}

const CarouselHolder = styled.div<ICarouselHolder>`
    position: relative;
    width: 100%;

    ${props => !props.$visible && "visibility: hidden;"}

    /* Hide arrows by default */
    .glider-next, .glider-prev {
        position: absolute;
        top: 50%;
        transform: translateY(-50%); /* Center vertically */
        width: 32px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        z-index: 9999;
        background-color: ${(props) => (props.$isLightMode ? 'rgba(255,255,255,0.3)' : 'rgba(0, 0, 0, 0.7)' )};
        opacity: 0; /* Initially hidden */
        transition: opacity 0.3s ease; /* Smooth transition for showing/hiding */
    }

    /* Show the prev button when hovering over the first visible item */
    .glider-slide:first-child:hover ~ .glider-prev {
        opacity: 1;
    }

    /* Show the next button when hovering over the last visible item */
    .glider-slide:last-child:hover ~ .glider-next {
        opacity: 1;
    }

    /* Show the buttons when hovering over the buttons themselves */
    .glider-next:hover,
    .glider-prev:hover {
        opacity: 1;
    }

    /* Optionally, show the buttons when hovering over the entire carousel */
    .glider:hover .glider-next,
    .glider:hover .glider-prev {
        opacity: 1;
    }

    & .glider-prev {
        left: 0px;
    }

    & .glider-next {
        right: 0px; 
    }

    & .glider-next.disabled, & .glider-prev.disabled {
        visibility: hidden;
    }

    & .glider-track {
        display: flex;
    }
    
    /* Dots (pagination) styles */
    & .glider-dots {
        display: flex;
        justify-content: flex-end;
        padding: 1rem 2rem 1rem 2rem;
        position: relative;
    }

    & .glider-dot {
        width: 20px; 
        height: 4px; 
        background-color: rbga(75,75,75,1);
        border-radius: 2px;
        margin: 0 5px;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    & .glider-dot.active {
        background-color: rbga(25,25,25,1); /* Active dot color */
        transform: scale(1.2); /* Optional: make active dot slightly larger */
    }

    /* General styling for each slide */
    .glider-slide {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0.4vw;
        box-sizing: border-box;
        white-space: normal;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.3s ease;
        width: 100%;
        height: 100%;
    }

    .glider-slide img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 0.5rem;
    }
`;

const Carousel = (props: ICarouselProps) => {
    const { isLightMode } = useAuth();
    let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
    const [loaded, setLoaded] = useState<boolean>(false);
    const [hoveredSlide, setHoveredSlide] = useState<null | number>(null);  
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null); 
    const [isModalOpen, setIsModalOpen] = useState<boolean | null>(null);
    const [imageData, setImageData] = useState<ICarouselImage | null>(null)

    const modalTimeoutRef = React.useRef<NodeJS.Timeout | null>(null); 

    const handleMouseEnter = (index: number, e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('.glider-next') || target.closest('.glider-prev')) {
            return; 
        }

        setHoveredSlide(index);
    };
    
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setHoveredSlide(null);
        setPosition(null);        
    }, []);

    useEffect(() => {
        const updateModalPosition = () => {
            const hoveredElement = document.querySelectorAll(`.${props.name} .glider-slide`)[hoveredSlide!];                   
            
            if (hoveredElement) {
                const bounding = hoveredElement.getBoundingClientRect();
    
                let centerX = bounding.left + bounding.width / 2;
                let centerY = bounding.top + bounding.height / 2;
    
                const modalWidth = 350; 
                const modalHeight = 350;
    
                const viewportRect = document.documentElement.getBoundingClientRect();
                const margin = 16; 
    
                if (centerX - modalWidth / 2 < viewportRect.left + margin) {
                    centerX = viewportRect.left + margin + modalWidth / 2;
                } else if (centerX + modalWidth / 2 > viewportRect.right - margin) {
                    centerX = viewportRect.right - margin - modalWidth / 2;
                }
    
                if (centerY - modalHeight / 2 < viewportRect.top + margin) {
                    centerY = viewportRect.top + margin + modalHeight / 2;
                } else if (centerY + modalHeight / 2 > viewportRect.bottom - margin) {
                    centerY = viewportRect.bottom - margin - modalHeight / 2;
                }
    
                setPosition(() => { return { top: centerY, left: centerX } });
    
                if (hoveredSlide !== null) {
                    const result = checkForImageSrc(props.carouselData!, props.name, hoveredSlide);
                    setImageData(result);
    
                    if (modalTimeoutRef.current) {
                        clearTimeout(modalTimeoutRef.current);
                    }
    
                    modalTimeoutRef.current = setTimeout(() => {
                        if (window.innerWidth >= 800) { setIsModalOpen(true) }
                    }, 100);
                }
            }
        };
    
        updateModalPosition();
    
        window.addEventListener('scroll', updateModalPosition);
    
        return () => {
            if (modalTimeoutRef.current) {
                clearTimeout(modalTimeoutRef.current);
            }
    
            window.removeEventListener('scroll', updateModalPosition);
        };
    }, [hoveredSlide, props.carouselData, props.name]);
    

    function checkForImageSrc(carouselJson: ICarousel[], name: string, elementIndex: number): ICarouselImage | null {
        const carousel = carouselJson.find((item: ICarousel) => item.name.toLowerCase() === name.toLowerCase());
        if (carousel) {
            if (elementIndex >= 0 && elementIndex < carousel.images.length) {
                return carousel.images[elementIndex];
            }
        }
        
        return null;
    }

    const handleMouseEnterDebounced = debounce((index: number, e: React.MouseEvent) => {
        handleMouseEnter(index, e);
    }, 200);


    return (<>
        {isModalOpen && (
            <SliderModal
                imageSrc={imageData!.src}
                smallImageSrc={imageData!.smallImage}
                imageAlt={imageData!.description}
                footerText={imageData!.description}
                position={position}
                imageData={imageData}
                setImageData={setImageData}
                setCarouselData={props.setCarouselData}
                index={hoveredSlide}
                name={props.name}
                mousePosition={props.mousePosition}
                isModalOpen={isModalOpen}
                onClose={closeModal}
            />
        )}
        <CarouselHolder $visible={loaded} $isLightMode={isLightMode}>
            <Glider
                // ref={callbackRef}
                hasArrows={true}
                draggable={props.draggable}
                hasDots={props.hasDots !== undefined ? props.hasDots : (props.children as React.ReactNode[])?.length > 1}
                slidesToShow={props.slidesToShow}
                slidesToScroll={props.slidesToScroll}
                scrollLock
                rewind
                iconLeft={
                    <div                    
                        className="glider-prev"
                        onMouseEnter={(e : React.MouseEvent) => {
                            e.stopPropagation();
                            setIsModalOpen(false)}
                        }>
                 
                      <Image
                        className="" 
                        alt="icon" 
                        src={`${url}/chevron-left-solid.svg`}
                        width={24}
                        height={24}
                        style={{ 
                            maxWidth: "24px", 
                            maxHeight: "24px", 
                            filter: isLightMode 
                                ? "invert(100%) brightness(0%) contrast(100%)" 
                                : "invert(100%) brightness(100%) contrast(100%)" 
                        }}
                    />
                    </div>
                }
                iconRight={
                    <div 
                        className="glider-next"
                        onMouseEnter={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            setIsModalOpen(false)}
                        }>
                        <Image
                            className="" 
                            alt="icon" 
                            src={`${url}/chevron-right-solid.svg`}
                            width={24}
                            height={24}
                            style={{ 
                                maxWidth: "24px", 
                                maxHeight: "24px", 
                                filter: isLightMode 
                                ? "invert(100%) brightness(0%) contrast(100%)" 
                                : "invert(100%) brightness(100%) contrast(100%)"
                            }}
                        />
                    </div>
                }
                onLoad={() => setLoaded(true)}
            >
                {React.Children.map(props.children, (child, index) => (
                    <div
                        onMouseOver={(e)=>{ 
                            handleMouseEnterDebounced(index, e)
                        }}
                    >
                        {child}
                    </div>
                ))} 
            </Glider>
        </CarouselHolder>
    </>);
};

export default Carousel;