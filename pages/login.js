import Logo from "../components/logo";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import SkipButton from "../components/skipButton";
import Input from "../components/formComponents/input";
import Button from "../components/buttons/button";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    Router.push("/dashboard");
  }

  return (
    <StyledLogin>
      <Logo fontSize={"40px"} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail*"
          required
          autocomplete="off"
        />
        <Input
          type="password"
          id="Password"
          name="Password"
          placeholder="Passwort*"
          minLength="6"
          required
        />
        <Button type="submit" label="Login">
          Login
        </Button>
      </Form>
      <CallToRegister>
        <p>Noch kein Account?</p>
        <Link href="/register">
          <ToColor>Registriere dich!</ToColor>
        </Link>
      </CallToRegister>
      <SkipButton />
    </StyledLogin>
  );
}

const CallToRegister = styled.section`
  margin-top: 30px;
  text-align: center;
  font-size: 1.3rem;
`;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0px;
`;

const Form = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const ToColor = styled.p`
  color: #0570db;
  margin: 0px;
  cursor: pointer;
`;
