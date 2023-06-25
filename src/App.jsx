import React from 'react';
import { Container, Img, ContainerItems, H1, ImputWraper, Label, Input, Button } from './style'

const App = () => {
  const hello = 'Olá!';

  return (
    <Container>
      <Img />

      <ContainerItems>
        <H1>{hello}</H1>

        <ImputWraper>
          <Label>Nome:</Label>
          <Input placeholder='Nome' />
        </ImputWraper>

        <ImputWraper>
          <Label>Idade:</Label>
          <Input placeholder='Idade' />
        </ImputWraper>

        <Button>cadastrar</Button>
      </ContainerItems>
    </Container>
  );
};

export default App;