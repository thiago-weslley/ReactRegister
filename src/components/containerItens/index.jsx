import React from "react";
import { ContainerItems as Container } from "./styles";

const ContainerItems = ({children, isContainerUsers}) => {
  return <Container isContainerUsers={isContainerUsers}>{children}</Container>;
};

export default ContainerItems;
