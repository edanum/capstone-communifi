import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import Router from "next/router";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";

export default function ExpeneForm({ onSubmit, buttonLabel, expense }) {
  const fileInputRef = useRef();

  const [description, setDescription] = useState(expense?.description ?? "");
  const [amount, setAmount] = useState(expense?.amount ?? "");
  const [comment, setComment] = useState(expense?.comment ?? "");
  const [receipt, setReceipt] = useState();
  const [receiptPreview, setReceiptPreview] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      amount,
      description,
      comment,
    };
    onSubmit(data);
  }

  //This function handles the imagefile inputed in the form
  function handleChange(event) {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setReceipt(file);
    } else {
      setReceipt(null);
    }
  }
  //This UseEffect takes the receipt image and mages a DataUrl out of it
  useEffect(() => {
    if (receipt) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setReceiptPreview(reader.result);
      };
      reader.readAsDataURL(receipt);
    } else {
      setReceiptPreview(null);
    }
  }, [receipt]);

  return (
    <Form onSubmit={handleSubmit} onChange={handleChange}>
      <Label htmlFor="description">Beschreibung*</Label>
      <Input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        pattern=".*[^\s]{1,}.*"
        required
      ></Input>
      <Label htmlFor="amount">Betrag*</Label>
      <Input
        type="number"
        step=".01"
        name="amount"
        id="amount"
        min="0"
        max="1000000"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
        required
      ></Input>
      <Label>Beleg*</Label>

      {receiptPreview ? (
        <img src={receiptPreview} />
      ) : (
        <ImageUploadButton
          src={addImageButton}
          object-fit="responsive"
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        />
      )}

      <FileInput type="file" ref={fileInputRef} required />
      <Label htmlFor="comment">Kommentar</Label>
      <Textarea
        type="text"
        name="comment"
        id="comment"
        rows="5"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <SubmitButton type="submit">Ausgabe {buttonLabel}</SubmitButton>
    </Form>
  );
}

const SubmitButton = styled.button`
  margin-top: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: #64a1e8;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  cursor: pointer;
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

const FileInput = styled.input`
  display: none;
`;

const Label = styled.label``;

const Textarea = styled.textarea`
  background-color: #d9d9d9;
  border: none;
  font-size: 18px;
  color: #5b5b5b;
`;

const ImageUploadButton = styled(Image)`
  cursor: pointer;
`;
