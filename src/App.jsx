import React from 'react';
import Background from './assets/logoHome.svg';
import Arrow from './assets/arrow.svg';
import { Container, Img, ContainerItems, H1, ImputWraper, Label, Input, Button } from './style';


const App = () => {
  const hello = 'Olá!';

  return (
    <Container>
      <Img src={Background} alt='Logo-imagem' />

      <ContainerItems>
        <H1>{hello}</H1>

        <ImputWraper>
          <Label htmlFor='name'>Nome:</Label>
          <Input id='name' type='text' placeholder='Nome' required />
        </ImputWraper>

        <ImputWraper>
          <Label htmlFor='age'>Idade:</Label>
          <Input id='age' type='number' placeholder='Idade' required />
        </ImputWraper>

        <Button>cadastrar<img src={Arrow} /></Button>
      </ContainerItems>
    </Container>
  );
};

export default App;