import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//IMG
import Background from "../../assets/logoRegister.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

//STYLE
import H1 from "../../components/Title";
import Button from "../../components/Button";
import { Container, Img, Ul, User, SpanUser, ButtonTrash, ContainerItems } from "./style";

const Users = () => {
  const hello = "Usuários";
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const baseUrl = "https://api-register-beta.vercel.app";

  useEffect(() => {
    const fechUsers = async () => {
      const { data: newUser } = await axios.get(`${baseUrl}/users`);
      setUsers(newUser);
    };

    fechUsers();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`${baseUrl}/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  };

  const goPushPage = () => {
    navigate("/");
  };

  return (
    <Container>
      <Img src={Background} alt="Logo-imagem" />

      <ContainerItems isContainerUsers={true}>
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

        <Button onClick={goPushPage} isBackButton={true}>
          <img src={Arrow} alt="arrow" />
          voltar
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Users;
