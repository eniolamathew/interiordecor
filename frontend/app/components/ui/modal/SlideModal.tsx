import Image from 'next/image';
import React, { FC, useCallback, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ICarouselImage, ICarousel } from "../../../../models/interface"
import Loading from '@/app/loadingComp';

interface ISlideModalProps {
    imageSrc: string;
    smallImageSrc: string;
    imageAlt: string;
    footerText: string;
    position: { top: number; left: number } | null;
    mousePosition:{ x: number, y: number } | null;
    isModalOpen: boolean;   
    imageData: ICarouselImage | null;
    setImageData: React.Dispatch<React.SetStateAction<ICarouselImage | null>>;
    index: number | null;
    name: string
    onClose: () => void; 
    setCarouselData: React.Dispatch<React.SetStateAction<ICarousel[]>>;
}

// Animation for scaling up
const scaleUp = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

// Animation for scaling down
const scaleDown = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0;
  }
`;

const ModalOverlay = styled.div<{ isVisible: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0); 
    z-index: 1000;
    overflow: hidden;
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s ease;
    opacity: ${props => (props.isVisible ? 1 : 0)};
`;

const ModalContent = styled.div<{ isClosing: boolean }>`
    position: absolute;
    background: white;
    border-radius: 8px;
    width: 350px;
    height: 350px;
    transform: translate(-50%, -50%);
    animation: ${props => (props.isClosing ? scaleDown : scaleUp)} 0.3s ease-out forwards;
`;

const ModalImage = styled.img`
    // width: 350px;
    // max-height: calc(300px - 0.5rem);
    // margin-bottom: 0.5rem;
    width: 350px;
    height: 350px;
    object-fit: cover;
    position: relative;
    loading: lazy;
`;

const ImageLoadingOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

const Likeicon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    margin: 1rem;
`;

const ModalBody = styled.div`
    position: relative;
    display: flex;
    width:'350px',
    height: '350px',
    align-items: center;
    justify-content: center;
`;

const ModalFooter = styled.div`
    width: 350px;
    height: calc(50px - 0.5rem);
    margin-top: 0.5rem;
    border-top: 1px solid #ccc;
    text-align: left;
`;

const ModalText = styled.p`
    font-size: 1rem;
    color: #333;
`;

const SlideModal: FC<ISlideModalProps> = ({ imageSrc, smallImageSrc, imageAlt, imageData, setImageData, setCarouselData, index, name, position, isModalOpen, mousePosition, onClose }) => {
    let url = process.env.NEXT_PUBLIC_CLOUDFLARE_URL_PROD ?? process.env.NEXT_PUBLIC_CLOUDFLARE_URL_DEV;
    const [openModal, setOpenMdal] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isliked, setIsLiked] = useState(imageData?.liked);
    const [scrollY, setScrollY] = useState<number>(0);
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const isMouseInsideModal = useCallback(() => {
        
        const handleMouseMove = (event: MouseEvent) => {
            return { x: event.clientX, y: event.clientY }
        };
        
        window.addEventListener('mousemove', handleMouseMove);

        if (!position || !mousePosition) return false;
        
        const modalLeft = position.left - 175; 
        const modalRight = position.left + 175;
        const modalTop = position.top - 175;
        const modalBottom = position.top + 175;
        
        const { x, y } = mousePosition;
        
        return x >= modalLeft && x <= modalRight && y >= modalTop && y <= modalBottom;
    }, [position, mousePosition]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll) };
    }, [scrollY])

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                setOpenMdal(false)
                onClose();  
            }, 100); 
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    useEffect(() => {
        // Check mouse position before opening the modal
        if (isModalOpen && isMouseInsideModal()) {
            setOpenMdal(true)
            setIsClosing(false); 
        }
        if (isModalOpen && !isMouseInsideModal()) {
            setOpenMdal(false)
            setIsClosing(true); 
            onClose();  
        }
    }, [isModalOpen, mousePosition, isMouseInsideModal, onClose]);

    const toggleLiked = () => {
        setImageData((prev)=>{
            if(prev){return { ...prev, liked: !prev.liked} }
            else{ return null}
        })
        setCarouselData((prev) => {
            return prev.map((x) => {
                if (x.name.toLowerCase() === name.toLowerCase()) {
                    return {...x, images: x.images.map((image, idx) => {
                            if (idx === index) {return { ...image, liked: !image.liked };
                            } else { return image }
                        })
                    };
                } else { return x }
            });
        });
        
        setIsLiked((prev) => !prev);
    };
  
    const handleScroll = () => { setScrollY(window.scrollY) };
    
    if (!isModalOpen && !isClosing) return null;
    
    const handleMouseLeave = () => {
        if (!isClosing) {
            setIsClosing(true); 
        }
    };

    const customLoader = ({ src }:{ src: string }) => { return src };

    return (
        <ModalOverlay isVisible={openModal}>
            <ModalContent
                isClosing={isClosing}
                style={{
                    top: `${position!.top}px`,
                    left: `${position!.left}px`
                }}
                onClick={(e) => e.stopPropagation()}
                onMouseLeave={handleMouseLeave} 
            >
                {!imageLoaded &&                    
                    <ModalBody >
                        <Image
                            alt={imageAlt}
                            loading='lazy'
                            width={350}
                            height={350}
                            src={imageSrc}
                            loader={customLoader}
                            style={{
                                width:'350px',
                                height: '350px',
                                objectFit: 'cover',
                                opacity: `${imageLoaded ? 1 : 0.5}`,
                            }}
                            onLoad={()=>{ setImageLoaded(true) }}
                        />
                        {!imageLoaded && (
                            <ImageLoadingOverlay >
                                <Loading />
                            </ImageLoadingOverlay>
                        )}
                    </ModalBody>
                }
                {imageLoaded && 
                    <ModalBody >
                        <Image
                            alt={imageAlt}
                            width={350}
                            height={350}
                            src={imageSrc}
                            loader={customLoader}
                            loading='lazy'
                            style={{
                                width:'350px',
                                height: '350px',
                                objectFit: 'cover',
                            }}
                        />
                    </ModalBody>
                }
                <Likeicon onClick={toggleLiked}>
                    {isliked ? 
                        <Image 
                            alt="like"
                            src={`${url}/heart-solid.svg`}
                            width={25}
                            height={25}
                            style={{ 
                                maxWidth: "25px", 
                                maxHeight: "25px", 
                            }}
                        /> :
                        <Image 
                            alt="like" 
                            src={`${url}/heart-regular.svg`}
                            width={25}
                            height={25}
                            style={{ 
                                maxWidth: "25px", 
                                maxHeight: "25px", 
                            }}
                        /> 
                    }
                </Likeicon>
            </ModalContent>
        </ModalOverlay>
    );
};

export default SlideModal;