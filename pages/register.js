import styled from "styled-components";
import Input from "../components/formComponents/input";
import SkipButton from "../components/skipButton";
import { Router } from "next/router";
import Button from "../components/buttons/button";
import Logo from "../components/logo";

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    Router.push("/dashboard");
  }

  return (
    <>
      <Logo fontSize={"35px"} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="surname"
          name="surname"
          placeholder="Surname*"
          requireds
        />
        <Input type="text" id="name" name="name" placeholder="Name*" required />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail*"
          required
        />
        <Input
          type="password"
          id="Password"
          name="Password"
          placeholder="Password*"
        />
        <Input
          type="password"
          id="Password_repeat"
          name="Password_repeat"
          placeholder="Password (repeat)*"
          minLength="6"
        />
        <Button type="submit" label="Registrieren"/>
      </Form>
      <SkipButton />
    </>
  );
}

const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 90%;
`;

