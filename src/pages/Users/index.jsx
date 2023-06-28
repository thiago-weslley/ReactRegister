import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

//IMG
import Background from "../../assets/logoRegister.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

//STYLE
import {
  Container,
  Img,
  ContainerItems,
  H1,
  Button,
  Ul,
  User,
  SpanUser,
  ButtonTrash,
} from "./style";

const Users = () => {
  const hello = "Usuários";
  const [users, setUsers] = useState([]);
  const history = useHistory();

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

  const goPushPage = () => {
    history.push("/");
  };

  return (
    <Container>
      <Img src={Background} alt="Logo-imagem" />

      <ContainerItems>
        <H1>{hello}</H1>

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

        <Button onClick={goPushPage}>
          <img src={Arrow} alt="arrow" />
          voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;
