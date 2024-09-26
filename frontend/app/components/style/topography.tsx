import styled from 'styled-components'
import theme from './theme';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    align?: string
}
const Heading = styled.h3`
    font-size: ${theme.fonts.default.size};
    font-weight: ${theme.fonts.default.bold};
    text-align: ${(props: HeadingProps) => props.align};
    text-transform: uppercase;
    text-align: center;


    `;

const TileHolderHeading = styled(Heading)`
    font-size: ${theme.headings.h3.size};
    font-weight: ${theme.headings.h3.weight};
    text-transform: uppercase;
    color: ${theme.headings.h3.color};
    text-align: center;
    //border-top: solid ${theme.colors.greyBorder} 1px;
    padding-top:34px;
    margin-top: 0rem;
    margin-bottom:29px;
`;


const H2Heading = styled(Heading)`
    font-size: ${theme.headingSize};
`;

const H3Heading = styled(Heading)`
    font-size: ${theme.heading3Size};
`;

interface ISectionHeadingProps {
    disabled?: boolean
    borderTop?: boolean
    borderBottom?: boolean
    fontSize?: string
}

const SectionHeading = styled(Heading)<ISectionHeadingProps>`
    font-size: ${(props: ISectionHeadingProps) => props.fontSize ?? theme.headings.h3.size};
    font-weight: ${theme.headings.h3.weight};
    text-transform: uppercase;
    color: ${props => props.disabled ? theme.colors.disabled : theme.headings.h3.color};
    text-align: center;
    //border-top: solid ${theme.colors.greyBorder} 1px;
    ${props => props.borderTop && `border-top: solid ${theme.colors.greyBorder} 1px;`}
    ${props => props.borderBottom && `border-bottom: solid ${theme.colors.greyBorder} 1px;padding-bottom:1.2rem;`}
    padding-top:34px;
    margin-top: 0rem;
    margin-bottom:29px;
`;


const PBold = styled.p`
    font-weight: 700;
`;

interface ISpanU extends React.HTMLAttributes<HTMLSpanElement> {
    bold?: boolean
}
const SpanU = styled.span<ISpanU>`
    font-weight: ${(props: ISpanU) => props.bold ? "700" : "normal"};
    text-decoration: underline;
`;

const H3Bold = styled.h3`
    font-weight: 700;
`;

const H3BoldUpper = styled(H3Bold)`
    text-transform: uppercase;
`;

export { Heading, PBold, SpanU, H3Bold, SectionHeading, H3BoldUpper, H2Heading, H3Heading, TileHolderHeading };