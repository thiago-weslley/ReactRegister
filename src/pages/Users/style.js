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

export const ContainerItems = styled.div`
  height: 400%;
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
