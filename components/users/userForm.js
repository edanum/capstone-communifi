import styled, { ThemeConsumer } from "styled-components";
import { useState, useRef } from "react";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";
import { uploadOnCloudinary } from "../../library/uploadOnCloudinary";
import Input from "../formComponents/input";
import TextArea from "../formComponents/textArea";
import Button from "../buttons/button";
import { useEffect } from "react";

export default function UserForm({ onSubmit, user }) {
  const [name, setName] = useState(user?.name || "");
  const [city, setCity] = useState(user?.city || "");
  const [plz, setPlz] = useState(user?.plz || "");
  const [street, setStreet] = useState(user?.street || "");
  const [iban, setIban] = useState(user?.iban || "");
  const [team, setTeam] = useState(user?.team || "");

  useEffect(() => {
    setName(user?.name);
    setCity(user?.city);
    setPlz(user?.plz);
    setStreet(user?.street);
    setIban(user?.iban);
    setTeam(user?.team);
  }, [user]);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    //send all data to expenseAdd page (upload to MongoDB after that step)
    const data = {
      name,
      city,
      plz,
      street,
      iban,
      team,
    };
    onSubmit(data);
  }

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
      <Label htmlFor="name">Name*</Label>
      <Input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        pattern=".*[^\s]{1,}.*"
        required
        autoFocus
      ></Input>
      <Label htmlFor="city">Wohnort</Label>
      <Input
        type="text"
        name="city"
        id="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        pattern=".*[^\s]{1,}.*"
      ></Input>
      <Label htmlFor="plz">PLZ:</Label>
      <Input
        type="number"
        name="plz"
        id="plz"
        value={plz}
        onChange={(event) => setPlz(event.target.value)}
        pattern=".*[^\s]{1,}.*"
      ></Input>
      <Label htmlFor="street">Straße und Hausnummer</Label>
      <Input
        type="text"
        name="street"
        id="street"
        value={street}
        onChange={(event) => setStreet(event.target.value)}
        pattern=".*[^\s]{1,}.*"
      ></Input>
      <Label htmlFor="street">IBAN</Label>
      <Input
        type="text"
        name="iban"
        id="iban"
        value={iban}
        onChange={(event) => setIban(event.target.value)}
        pattern=".*[^\s]{1,}.*"
      ></Input>
      <Button type="submit" label={"Profildaten speichern"} />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  font-size: 20px;
`;

const Label = styled.label``;
