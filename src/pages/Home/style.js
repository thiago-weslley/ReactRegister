import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Img = styled.img`
  margin-top: 4rem;
  width: 90%;
`;

export const ContainerItems = styled.div`
  height: 200%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  gap: 4rem;
  padding: 6rem 2rem;
  border-radius: 4rem 4rem 0 0;
  box-shadow: 2px 3px 3px 1px rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
`;

export const ImputWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 3px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 2.2rem;
  @media (min-width: 500px) {
    align-self: flex-start;
    margin-left: 5rem;
  }
`;

export const Input = styled.input`
  padding-left: 2.5rem;
  font-size: 1.8rem;
  font-weight: 300;
  width: 90%;
  height: 5rem;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.4);
  border: none;
  &:focus {
    outline: 2px solid #da7c2f;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 90%;
  height: 5rem;
  margin-top: 1.5rem;
  text-transform: uppercase;
  font-size: 2rem;
  color: #fff;
  border: none;
  background: #000000cc;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px #00000040;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: #000000;
  }
`;
