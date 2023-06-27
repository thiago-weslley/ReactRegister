import React, { useState, useRef } from 'react';
import Background from './assets/logoHome.svg';
import Arrow from './assets/arrow.svg';
import Trash from './assets/trash.svg'
import { Container, Img, ContainerItems, H1, ImputWraper, Label, Input, Button, Ul, User, SpanUser, ButtonTrash } from './style';


const App = () => {
  const hello = 'Olá!';
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();



  const addNewUser = () => {
    setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]);
  }

  return (
    <Container>
      <Img src={Background} alt='Logo-imagem' />

      <ContainerItems>
        <H1>{hello}</H1>

        <ImputWraper>
          <Label htmlFor='name'>Nome:</Label>
          <Input ref={inputName} id='name' type='text' placeholder='Nome' required />
        </ImputWraper>

        <ImputWraper>
          <Label htmlFor='age'>Idade:</Label>
          <Input ref={inputAge} id='age' type='number' placeholder='Idade' required />
        </ImputWraper>

        <Button onClick={addNewUser}>
          cadastrar<img src={Arrow} alt='arrow' />
        </Button>

        <Ul>
          {
            users.map(user => (
              <User key={user.id}>
                <SpanUser>{user.name}</SpanUser><span>{user.age}</span>
                <ButtonTrash><img src={Trash} alt='trash' /></ButtonTrash>
              </User>
            ))
          }
        </Ul>
      </ContainerItems>
    </Container>
  );
};

export default App;