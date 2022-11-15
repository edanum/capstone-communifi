import Logo from "../components/logo";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import Input from "../components/formComponents/input";
import Button from "../components/buttons/button";
import LoginButton from "../components/buttons/loginButton";
import { useSession } from "next-auth/react";
import { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";

export default function Login() {
  const { data: session } = useSession();

  //LOAD LOGIN ANIMATION
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/login_animation.json"),
    });
  }, []);
  //

  function handleSubmit(event) {
    event.preventDefault();
    Router.push("/dashboard");
  }

  if (session) {
    setTimeout(() => {
      Router.push("/dashboard");
    }, 3000);
  }
  return (
    <StyledLogin>
      {session ? (
        <>
          <WelcomeBack>
            Hey {session.user.name},
            <p>Willkommen zurück! Du wirst sofort weitergeleitet.</p>
          </WelcomeBack>
          <div ref={container}></div>
        </>
      ) : (
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
        </>
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

const WelcomeBack = styled.h1`
  color: var(--headline);
  text-align: center;

  p {
    font-size: 16px;
    color: var(--paragraph);
    margin-top: 20px;
  }
`;
