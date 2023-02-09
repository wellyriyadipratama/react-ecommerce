import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    border-radius : 0.3rem;
    font-size     : 1.4rem;
    background    : transparent;
    color         : var(--mainWhite);
    &:hover{
        background: var(--lightBlue);
        color     : var(--mainBlue);
    }
`;

export const ButtonDetail = styled.button`
    text-transform: capitalize;
    border-radius : 0.8rem;
    font-size     : 1.2rem;
    background    : transparent;
    color         : var(--mainBlue);
    &:hover{
        background: var(--lightBlue);
        color     : var(--mainBlue);
    }
`;

export const ButtonModal = styled.button`
    text-transform: capitalize;
    border-radius : 0.8rem;
    font-size     : 1.2rem;
    background    : transparent;
    color         : var(--mainBlue);
    &:hover{
        background: var(--lightBlue);
        color     : var(--mainBlue);
    }
`;