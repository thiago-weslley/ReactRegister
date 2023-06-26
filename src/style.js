import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    margin: 0 auto;
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;

`;

export const Img = styled.img`
    margin-top: 4rem;
    width: 90%;
`;

export const ContainerItems = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 4rem;
    padding: 6rem 2rem;
    border-radius: 4rem 4rem 0 0;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
        157deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
`;

export const H1 = styled.h1`
    color: #DA7C2F;
    text-transform: uppercase;
    font-size: 4rem;
`;

export const ImputWraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 3px;
`;

export const Label = styled.label`
    align-self: flex-start;
    margin-left: 4.5rem;
    font-size: 2.2rem;
`;

export const Input = styled.input`
    padding-left: 2.5rem;
    font-size: 2rem;
    width: 90%;
    height: 5rem;
    border-radius: 10px;
    box-shadow: 4px 4px 4px 0px #00000040;
    border: none;
`;

export const Button = styled.button`
    width: 90%;
    height: 5rem;
    margin-top: 1.5rem;
    color: #FFF;
    border: none;
    background: #000000CC;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
`;
