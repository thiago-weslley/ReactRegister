import React, { useState, useRef } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

//IMG
import Background from "../../assets/logoHome.svg";
import Arrow from "../../assets/arrow.svg";

//STYLE
import H1 from "../../components/Title";
import ContainerItems from "../../components/ContainerItens";
import Button from "../../components/Button";
import { Container, Img, ImputWraper, Label, Input } from "./style";

const Home = () => {
  const hello = "Olá!";
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  const baseUrl = "https://api-register-beta.vercel.app";

  const addNewUser = async () => {
    const name = inputName.current.value;
    const age = inputAge.current.value;

    if (name.trim() === "" || age.trim() === "") {
      return;
    }

    const { data: newUser } = await axios.post(`${baseUrl}/users`, {
      name: name,
      age: age,
    });

    setUsers([...users, newUser]);

    navigate("/usuarios");
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
      </ContainerItems>
    </Container>
  );
};

export default Home;
