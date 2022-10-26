import styled from "styled-components";
import { useState } from "react";
import Router from "next/router";

export default function ExpeneForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      amount,
      description,
      comment,
   
    };
    onSubmit(data);
    Router.push("/expenses");
  }

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [comment, setComment] = useState("");

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="description">Beschreibung</Label>
      <Input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required
      ></Input>
      <Label htmlFor="amount">Betrag</Label>
      <Input
        type="number"
        name="amount"
        id="amount"
        min="0"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        redquired
      ></Input>

      <Label htmlFor="comment">Kommentar</Label>
      <Textarea
        type="text"
        name="comment"
        id="comment"
        rows="5"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        required
      />
      <Button type="submit">Ausgabe hinzufügen</Button>
    </Form>
  );
}

const Button = styled.button`
  margin-top: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #64a1e8;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 85%;
  font-size: 20px;
`;

const Input = styled.input`
  background-color: #d9d9d9;
  height: 40px;
  font-size: 18px;
  color: #5b5b5b;
  border: none;
`;

const Label = styled.label``;

const Textarea = styled.textarea`
  background-color: #d9d9d9;
  border: none;
  font-size: 18px;
  color: #5b5b5b;
`;
