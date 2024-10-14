import theme from "../../style/theme"
import { Heading } from "../../style/topography"
import { useEffect, useRef, useState } from "react"
import { useAuth } from "@/shared/context/AuthContext";
import styled from "styled-components"

const ModalHolder = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    position: fixed;
    right:0px;
    top:0px;
    left:0px;
    bottom:0px;
    background: rgba(0,0,0,0.7);
    z-index:9999999;
`

interface IModalDivProps extends React.HTMLAttributes<HTMLDivElement> {
    $isLightMode?: boolean;
    width?: string;
    height?: string;
  }

const ModalDiv = styled.div<IModalDivProps>`
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    position: relative;
    width:60vh;
    margin-left:auto;
    margin-right:auto;
    top:50%;
    transform: translateY(-50%);
    z-index:9999999;
    background-color: ${(props) => props.$isLightMode ? theme.lightMode.backgroundColor : theme.darkMode.backgroundColor};
    max-height:90vh;
    overflow-y:auto;

    @media screen and (max-width: ${theme.breakpoints.md}px) {
        position: fixed;
        width:100%;
        height:100%;
        max-height:none;
    }
    
    & h3 {
        padding:0rem;
        padding-left:2rem;
        padding-right:2rem;
        margin:0px;
    }
`

const CloseButton = styled.div<React.HTMLAttributes<HTMLElement>>`
    width: 2rem;
    text-align: center;
    z-index:9999999;
    cursor: pointer;
`

interface IModalHeadingProps {
    hasBorder: boolean
}

const ModalHeader = styled.div<IModalHeadingProps>`
  display: flex;
  align-items: center;
  justify-content: between;
  margin-top: 0rem;
  border-bottom: solid ${theme.colors.greyBorder} ${(props) => (props.hasBorder ? "1px" : "0px")};
  padding: 1.2rem !important;
`;

const ModalHeading = styled(Heading)`
  font-size: ${theme.headings.h3.size};
  font-weight: ${theme.headings.h3.weight};
  text-transform: none;
  text-align: left;
  margin-top: 0rem;
`;

const Content = styled.div<React.HTMLAttributes<HTMLElement>>`
    padding:1rem;
    flex:1;
`

export interface IModalProps {
    children: any
    title: string
    onClose: () => void
    width?: string
    height?: string
}

const Modal = (props: IModalProps) => {
    const { isLightMode } = useAuth();
    const html = document.getElementsByTagName('html')[0]
    const modalHolderRef = useRef<HTMLDivElement>(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        var modal = modalHolderRef.current
        var footer = document.querySelector("#footer")
        if (modal) {
            footer?.appendChild(modal)
            setShow(true)
        }
        html.style.overflow = "hidden"
        document.body.style.paddingRight = "1rem"
        return () => {
            html.style.overflow = ""
            document.body.style.paddingRight = ""
        }
    }, [modalHolderRef.current])

    return <>
        {/* @ts-ignore */}
        <ModalHolder ref={modalHolderRef} style={{ visibility: show ? "visible" : "hidden" }} >
            <ModalDiv  $isLightMode={isLightMode}
              style={{ width: props.width, height: props.height }}
              onClick={(e: any) => {e.stopPropagation()}} 
            >
                <ModalHeader hasBorder={!!props.title}>
                    <ModalHeading style={{padding: "0rem", cursor: "pointer"}} >{props.title}</ModalHeading>
                    <CloseButton onClick={props.onClose}>X</CloseButton>
                </ModalHeader>
                <Content style={{ top: "0", bottom: "0" }}>{props.children}</Content>
            </ModalDiv>
        </ModalHolder>
    </>
}

export default Modal