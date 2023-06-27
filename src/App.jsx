import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

//IMG
import Background from "./assets/logoHome.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

//STYLE
import {
  Container,
  Img,
  ContainerItems,
  H1,
  ImputWraper,
  Label,
  Input,
  Button,
  Ul,
  User,
  SpanUser,
  ButtonTrash,
} from "./style";

const App = () => {
  const hello = "Olá!";
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const addNewUser = async () => {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
  };

  useEffect(() => {
    const fechUsers = async () => {
      const { data: newUser } = await axios.get("http://localhost:3000/users");
      setUsers(newUser);
    };

    fechUsers();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  return (
    <Container>
      <Img src={Background} alt="Logo-imagem" />

      <ContainerItems>
        <H1>{hello}</H1>

        <ImputWraper>
          <Label htmlFor="name">Nome:</Label>
          <Input ref={inputName} id="name" type="text" placeholder="Nome" />
        </ImputWraper>

        <ImputWraper>
          <Label htmlFor="age">Idade:</Label>
          <Input ref={inputAge} id="age" type="number" placeholder="Idade" />
        </ImputWraper>

        <Button onClick={addNewUser}>
          cadastrar
          <img src={Arrow} alt="arrow" />
        </Button>

        <Ul>
          {users.map((user) => (
            <User key={user.id}>
              <SpanUser>{user.name}</SpanUser>
              <span>{user.age}</span>
              <ButtonTrash onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="trash" />
              </ButtonTrash>
            </User>
          ))}
        </Ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
