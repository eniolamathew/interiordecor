import useWindowDimensions from '../../../../shared/hook/useWindowDimensions';
import theme from '../../../components/style/theme';
import { useState } from 'react';
import styled from 'styled-components';
import path from 'path';

export interface IImageProps {
    width?: number;
    height?: number;
    alt: string;
    src: string;
    priority?: boolean;
    sizes?: string;
    $breaks: number[];
    $layout: string;
    $maxSize: 1 | 2 | 3 | 4 | 5 | 6;
}

const Picture = styled.picture`
    box-sizing: border-box;
    display: block;
    overflow: hidden;
    width: initial;
    height: initial;
    background: none;
    opacity: 1;
    border: 0px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    inset: 0px;
`;

interface IImage extends React.HTMLAttributes<HTMLImageElement> {
    width?: number;
    height?: number;
    alt: string;
    src: string;
    srcSet?: string;
    priority?: boolean;
    sizes?: string;
    $breaks: number[];
    $layout: string;
    $maxSize?: 1 | 2 | 3 | 4 | 5 | 6;
    loading?: string;
}

const Image = styled.img<IImage>`
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: none;
    margin: auto;
    display: block;
    border-radius: 0.5rem; 
    object-fit: contain;
`;

const ImageLoader = (props: IImageProps) => {
    const dimensions = useWindowDimensions();
    const [width] = useState(props.width ?? 256);
    const [height] = useState(props.height ?? 256);
    const sizes = [96, 300, 640, 800, 1280, 1920, 2048, 3840];


    const getSizes = (type: string) =>
        sizes.map((s) => {
            if (!props.src) {
                return 'missing image';
            }
            const sizes = [100, 300, 600, 900, 1800, 3600];
            if (props.src?.toLowerCase().startsWith('http')) {
                return props.src;
            }
            const filename = path.parse(props.src).name;
            let t = props.$maxSize ? props.$maxSize : sizes.length;
            for (let i = 0; i < (props.$maxSize ? props.$maxSize : sizes.length); i++) {
                if (s < sizes[i]) {
                    t = i + 1;
                    break;
                }
            }
            return (
                `/public/asset/img/${filename.toLowerCase()}/${t}/${filename.toLowerCase()}.${type} ${s}w`
            );
        });

    let w = width;
    let h = height;

    if (props.$breaks && props.$breaks.length > 0) {
        if (dimensions.width > theme.breakpoints.xs) {
            w = props.$breaks[0];
            h = w;
        }
        if (dimensions.width > theme.breakpoints.sm) {
            w = props.$breaks.length > 1 ? props.$breaks[1] : w;
            h = w;
        }
        if (dimensions.width > theme.breakpoints.md) {
            w = props.$breaks.length > 2 ? props.$breaks[2] : w;
            h = w;
        }
        if (dimensions.width > theme.breakpoints.lg) {
            w = props.$breaks.length > 3 ? props.$breaks[3] : w;
            h = w;
        }
    }    

    if (!props.src) {
        return <>Missing image src</>;
    }

    return (<>
        <Picture>
            <Image
                {...props}
                src={props.src}
                loading="lazy"
                sizes={props.sizes}
                draggable={false}
                alt={props.alt}
                width={w}
                height={h}
            />
        </Picture>
    </>
    );
};

export default ImageLoader;
