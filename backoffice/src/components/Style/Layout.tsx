import styled from 'styled-components';
import theme from './theme'

const Section = styled.section`
    //padding: 2rem 0;
`;

const Container = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    margin: 0 auto;
    max-width: ${theme.breakpoints.xl + "px"};
    

    @media screen and (min-width: ${theme.breakpoints.md}px) {
        }
`;

interface RelativeWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    textAlign?: string
}
const RelativeWrapper = styled.div`
    position: relative;
    text-align: ${(props: RelativeWrapperProps) => props.textAlign};
`;

const FlexWrapper = styled.div`
    display: flex;
`;

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    gap?: string
    padding?: string
    fullwidth?: boolean
}

const GridContainer = styled.div`
    column-gap: 1.5rem;

    column-gap: ${(props: GridProps) => props.gap};

    @media screen and (max-width: calc(${theme.breakpoints.md}px - 1px)) {
        column-gap: 0rem !important;
    }

    display: grid;
    grid-template-columns: repeat(12,1fr);
`;

const InnerGridContainer = styled(GridContainer)`
    margin: 0 auto;
    max-width: 1528px;
    padding-left: 24px;
    padding-right: 24px;
    > * {
        max-width: 1528px;
        }
`;

const FullWidthContainer = styled(GridContainer)`
    margin-left: calc(50% - (50vw + 1.5rem));
    margin-right: calc(50% - (50vw + 1.5rem));    
`;

const GridSection = styled(GridContainer)`
    padding: ${theme.sectionPadding};
`;

interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    lg?: number
    md?: number
    sm?: number
    justify?: string
    smrow?: number
    alignSm?: string
    start?: number
    end?: number
    align?: string
    currentPosition?: number
}

const Col = styled.div<ColProps>`
    align-self: ${(props: ColProps) => props.align ? props.align : "start"};
    grid-row: ${(props: ColProps) => props.smrow}; 
    grid-column: span ${(props: ColProps) => props.sm ? props.sm : "12"};
    justify-self: ${(props: ColProps) => props.justify};

    @media screen and (min-width: ${theme.breakpoints.md}px) {
        grid-row: auto;
        grid-column: span ${(props: ColProps) => props.md};
        grid-column-start: ${(props: ColProps) => props.start};
        grid-column-end: ${(props: ColProps) => props.end};
        padding-bottom: 0;
    }

    @media screen and (min-width: ${theme.breakpoints.lg}px) {
        grid-column: span ${(props: ColProps) => props.lg};
    }
`;


interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: string;
    align?: string;
    alignSm?: string;
    smrow?: number;
    mdrow?: number;
    lgrow?: number;
}

const Row = styled.div<RowProps>`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px; 

    justify-items: ${(props: RowProps) => props.justify || "stretch"};
    align-items: ${(props: RowProps) => props.align || "stretch"};

    /* Handle small screens */
    @media screen and (max-width: ${theme.breakpoints.sm}px) {
        grid-template-columns: ${(props: RowProps) => `repeat(${props.smrow || 12}, 1fr)`};
    }

    /* Handle medium screens */
    @media screen and (min-width: ${theme.breakpoints.md}px) {
        grid-template-columns: ${(props: RowProps) => `repeat(${props.mdrow || 12}, 1fr)`};
    }

    /* Handle large screens */
    @media screen and (min-width: ${theme.breakpoints.lg}px) {
        grid-template-columns: ${(props: RowProps) => `repeat(${props.lgrow || 12}, 1fr)`};
    }
`;

interface ILinksProps extends React.HTMLAttributes<HTMLUListElement> {
    margin?: string
    align?: string
    marginSm?: string
}

const InlineLinks = styled.ul<ILinksProps>`
    display:inline-flex;  
    list-style:none;
    padding: 0;

    li {
        margin: ${(props: ILinksProps) => props.marginSm};
        
        @media screen and (min-width: ${theme.breakpoints.md}px) {
            margin: ${(props: ILinksProps) => props.margin};
        }

        &:last-child {
            margin-right: 0;
        }
        &:first-child {
            margin-left: 0;
        }
    }
`;

const ColumnLinks = styled.ul` 
    list-style:none;
    padding: 0;

    li {
        padding: 0.5rem 0;
    }
`;

const StackedLinks = styled(ColumnLinks)`
    display: flex;
    flex-direction: column;    
`;

const ListLink = styled.li`
    text-decoration: none;
    &:hover {
        text-decoration: underline;

    }
`;

const BorderContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
    background-color: #FFF;
    border: 1px solid ${theme.colors.greyBorder};
    padding: 0.5rem;

    @media screen and (min-width: ${theme.breakpoints.sm}px) {
        padding: 1rem;
    }

    @media screen and (min-width: ${theme.breakpoints.lg}px) {
        padding: 1.5rem;
    }
`;

export interface ICenterProps extends React.HTMLAttributes<HTMLDivElement> {
    hidden?: boolean
    children:any
}

const Center = styled.div<ICenterProps>`
    text-align: center;
    ${(props: ICenterProps) => props.hidden && "display:none"}
`;

const SimpleTile = styled.div`
    text-align: center;
`;

const OverlapContainer = styled.div`
    margin-top: -5rem;
    background-color: #FFF;
    left: 10%;
    padding: 2rem 4rem 0.5rem;
    position: relative;
    width: 80%;
    word-break: break-word;
`;

const TallOverlapContainer = styled(OverlapContainer)`
    margin-top: -7rem;
`;

const PaddedDiv = styled.div`
    padding: 1rem 0;
`;

const RoundBorderContainer = styled(BorderContainer)`
    border-radius: 1rem;
`;

interface IModalWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    showModal: boolean
}

const ModalWrapper = styled.div<IModalWrapperProps>`
    background-color: #FFF;
    box-shadow: ${theme.boxShadow};
    height: auto;
    top: 50%;
    left: 5vw;
    transform: translate(0%, 0%);
    padding: 0 2rem 2rem;
    position: absolute;
    text-align: center;
    transition: visibility 300ms linear;
    visibility: ${(props: IModalWrapperProps) => props.showModal ? "visible" : "hidden"};
    width: 90vw;
    z-index: 99;

    label {
        display: block;
        margin-bottom: 0.5rem;
        text-align: left;
    }

    ul {
        margin-bottom: 1.5rem;
    }

    @media screen and (min-width: ${theme.breakpoints.md}px) {
        left: 10vw; 
        width: 80vw;

        label {
            text-align: right;
        }

        ul {
            margin-bottom: 0;
        }

        button {
            max-width: 50%;
            margin: 0 auto;
        }
    }

    @media screen and (min-width: ${theme.breakpoints.lg}px) {
        left: 25vw; 
        width: 50vw;
    }
`;

const ModalForm = styled.div`
    background-color: ${theme.colors.lighterGrey};
    margin: 0 -2rem 2rem;
    padding: 1rem;

    > div {
        padding: 1rem;
    }
`;

export { InnerGridContainer, Section, Container, RelativeWrapper, GridContainer, FullWidthContainer, GridSection, Row, Col, InlineLinks, StackedLinks, ColumnLinks, ListLink, BorderContainer, Center, SimpleTile, OverlapContainer, TallOverlapContainer, PaddedDiv, RoundBorderContainer, ModalWrapper, ModalForm, FlexWrapper }