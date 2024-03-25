import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Main = styled.div`
    background-color: ${colors.primary};
    height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colors.primary};
    display: flex;
    justify-content: ${window.innerWidth > 768 ? 'flex-start' : 'center'};
    align-items: center;
    padding-left: ${window.innerWidth > 768 ? '20px' : '0px'};
`;

export const Logo = styled.img`
    max-width: 10em;
    height: 4em;
    object-fit: contain;
`;

export const Building = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    pointer-events: none;

`;

export const ShowPassword = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
}`;

export const ButtonIcon = styled.img`
    width: 1em;
    height: 1em;
    object-fit: contain;
    pointer-events: none;
`;

export const ForgotPasswordContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 1em;
    gap: .5em;
`;








