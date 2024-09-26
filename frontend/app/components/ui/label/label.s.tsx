import theme from "../../style/theme";
import styled from 'styled-components'

export const Label = styled.span`
    font-size: 12px;
`;

export const SubLabel = styled.span`
    margin-left:5px;
    font-size: 12px;
    color: ${theme.colors.midGrey}
`;

export const ErrorLabel =styled.span`
    font-size: 10px;
    color: ${theme.colors.error};
`;