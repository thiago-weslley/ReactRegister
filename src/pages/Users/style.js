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
  margin-top: 14.5rem;
  width: 90%;
`;

export const Ul = styled.ul`
  width: 90%;
`;

export const User = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.4);
  &:hover {
    box-shadow: 2px 2px 6px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const SpanUser = styled.span`
  max-width: 65%;
  width: 100%;
`;

export const ButtonTrash = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
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
  img {
    transform: scaleX(-1);
  }
  &:hover {
    background: #000000;
  }
`;
