import Logo from "../components/logo";
import styled from "styled-components";
import Link from "next/link";
import Router from "next/router";
import SkipButton from "../components/skipButton";

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
        />
        <Input
          type="password"
          id="Password"
          name="Password"
          placeholder="Password*"
          minLength="6"
          required
        />
        <Button type="submit">Login</Button>
      </Form>
      <CallToRegister>
        <p>No account yet?</p>
        <Link href="/register">
          <ToColor>Register!</ToColor>
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

const Button = styled.button`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border-radius: 4px;
  height: 40px;
  background-color: #5676e6;
  font-size: 24px;
  color: #e7e1e1;
  cursor: pointer;
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

const Input = styled.input`
  text-align: center;
  height: 40px;
  font-size: 20px;
  background-color: #d9d9d9;
  border: none;
  color: #8f8f8f;
  ::placeholder {
    color: #8f8f8f;
  }
`;

const ToColor = styled.p`
  color: #0570db;
  margin: 0px;
  cursor: pointer;
`;
