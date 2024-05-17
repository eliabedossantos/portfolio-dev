import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.primary.darkBlue};
    padding: 3rem;
`;

export const Main = styled.div`
    background-color: ${colors.primary.midnightBlue};
    height: 100%;
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${colors.lines};
`;