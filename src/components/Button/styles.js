import styled from "styled-components";

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

  img {
    transform: ${(props) => (props.isBackButton ? "scaleX(-1)" : "scaleX(1)")};
  }
`;
