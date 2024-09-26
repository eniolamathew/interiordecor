"use client"
import React from 'react'

const icon = () => {
  return (
    <div>icon</div>
  )
}

export default icon
// "use client";
// import Image from "next/image";
// import styled from "styled-components";

// export enum IconType {
//     ShoppingBasket = "basket-shopping.svg",
//     Heart = "heart.svg",
//     HeartSolid = "heart-solid.svg",
//     User = "user-regular.svg",
//     Check = "check.svg",
//     ArrowCircleRight = "circle-arrow-right.svg",
//     ChevronUp = "chevron-up.svg",
//     ChevronDown = "chevron-down.svg",
//     ChevronLeft = "chevron-left-solid.svg",
//     ChevronRight = "chevron-right-solid.svg",
//     CircleMinus = "circle-minus.svg",
//     CirclePlus = "circle-plus.svg",
//     CircleCheck = "circle-check.svg",
//     BoxOpen = "box-open.svg",
//     Coins = "coins.svg",
//     Gift = "gift.svg",
//     QuestionCircle = "circle-question.svg",
//     Search = "magnifying-glass.svg",
//     Times = "circle-xmark.svg",
//     CaretLeft = "caret-left.svg",
//     CaretRight = "caret-right.svg",
//     CircleCaretDown = "circle-caret-down.svg",
//     AngleUp = "angle-up.svg",
//     Filter = "filter.svg",
//     PaperPlane = "paper-plane.svg",
//     Bars = "bars.svg",
//     Xmark = "xmark.svg",
//     NotFound = "notdef.svg",
//     StarFilled = "star-sharp-solid.svg",
//     StarEmpty = "star-sharp.svg",
//     StarHalf = "star-sharp-half-stroke.svg",
//     Twitter = "x-twitter.svg",
//     Instagram = "instagram.svg",
//     Pintrest = "pinterest-p.svg",
//     FaceBook = "facebook-f.svg",
//     Email = "envelope.svg",
//     TikTok = "tiktok.svg",
//     YouTube = "youtube.svg",
//     Minus = "minus.svg",
    
//     Pencil = "pencil.svg",
//     Store = "store.svg",
//     StoreSlash = "store-slash.svg",
//     Eye = "eye.svg",
//     EyeSlash = "eye-slash.svg",
//     Wrench = "wrench.svg",
//     Trash = "trash.svg",
//     List = "list.svg",
//     SlidersH = "sliders-h.svg",
//     ChartLine = "chart-line.svg",
//     Image = "image.svg",
//     Comment = "comment.svg",
//     MoneyCheckPen = "money-check-pen.svg",
//     Newspaper = "newspaper.svg",
//     PersonBooth = "person-booth.svg",
//     BellExclamation = "bell-exclamation.svg",
//     Percent = "percent.svg",
//     CalculatorSimple = "calculator-simple.svg",
//     Ticket = "ticket.svg",
//     Tag = "tag.svg",
//     ListOl = "list-ol.svg"
// }

// export type ImageLoaderProps = {
//     src: string
//     width: number
//     quality?: number
// }

// type PlaceholderValue = 'blur' | 'empty'

// export type ImageProps = Omit<
//     JSX.IntrinsicElements['img'],
//     'src' | 'srcSet' | 'ref' | 'width' | 'height' | 'loading'
// > & {
//     src: string
//     width: number
//     height: number
//     layout?: any
//     loader?: any
//     filter?: any
//     priority?: boolean
//     placeholder?: PlaceholderValue
//     // lazyRoot?: React.RefObject<HTMLElement> | null
//     // lazyBoundary?: string
//     // blurDataURL?: string
//     // unoptimized?: boolean
// }

// export const IconWrapper = styled.div<React.HTMLAttributes<HTMLElement>>`
// img {
//     filter: invert(47%) sepia(1%) saturate(1226%) hue-rotate(313deg) brightness(92%) contrast(85%);
//  }
//  display:inline-block;
// `

// export default function IconImageLoader(props: ImageProps) {
//     if (typeof window === 'undefined') return null;

//     return <IconWrapper className={props.className}>
//         <Image
//             {...props}
//             src={"/icons/" + props.src.toLowerCase()}
//             alt={props.alt || "alt"}
//             width={props.width} 
//             height={props.height}  
//             style={{
//                 objectFit: "cover",
//                 objectPosition: "center",
//                 width: props.width, 
//                 height: props.height || props.width,
//                 filter: props.filter,
//                 color: props.color,
//             }}
//         />
//     </IconWrapper>
// }