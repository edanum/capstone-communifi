import styled from "styled-components";
import Link from "next/link";
import SkipButton from "../components/skipButton";
import { Router } from "next/router";

export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    Router.push("/dashboard");
  }

  return (
    <>
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
        <Button type="submit">Register</Button>
      </Form>
      <SkipButton />
    </>
  );
}

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const Input = styled.input`
  text-align: center;
  height: 40px;
  font-size: 20px;
  background-color: #d9d9d9;
  border: none;
  color: black;
  ::placeholder {
    color: #8f8f8f;
  }
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
