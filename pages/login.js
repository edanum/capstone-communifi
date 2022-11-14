import Logo from "../components/logo";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import SkipButton from "../components/skipButton";
import Input from "../components/formComponents/input";
import Button from "../components/buttons/button";
import LoginButton from "../components/buttons/loginButton";
import { useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  function handleSubmit(event) {
    event.preventDefault();
    Router.push("/dashboard");
  }

  console.log(session);

  if (session) {
    setTimeout(() => {
      Router.push("/dashboard");
    }, 5000);
  }
  return (
    <StyledLogin>
      {!session ? (
        <>
          <Logo fontSize={"40px"} />
          <Form onSubmit={() => handleSubmit()}>
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
          <LoginButton />
          <CallToRegister>
            <p>Noch kein Account?</p>
            <Link href="/register">
              <ToColor>Registriere dich!</ToColor>
            </Link>
          </CallToRegister>
          <SkipButton />
        </>
      ) : (
        `Du bist bereits als ${session.user.name} eingelogged und wirst zum Dashboard weitergeleitet.`
      )}
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
  padding: 60px 0px;
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
