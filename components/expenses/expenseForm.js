 import styled, { ThemeConsumer } from "styled-components";
import { useState, useRef, useEffect } from "react";
import Router from "next/router";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";
import { uploadOnCloudinary } from "../../library/uploadOnCloudinary";

export default function ExpeneForm({ onSubmit, buttonLabel, expense }) {
  const fileInputRef = useRef();

  const [description, setDescription] = useState(expense?.description ?? "");
  const [amount, setAmount] = useState(expense?.amount ?? "");
  const [comment, setComment] = useState(expense?.comment ?? "");
  const [receipt, setReceipt] = useState(expense?.receipt ?? "");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    //Grab the File input, upload it on cloudinary and save the cloudinary data inside of the states receipt and receiptPreview
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const fileList = fileInput.files;
    const uploadedFiles = await uploadOnCloudinary(fileList);
    setReceipt(uploadedFiles.secure_url);

    //send all data to expenseAdd page (upload to MongoDB after that step)
    const data = {
      amount,
      description,
      comment,
      receipt,
    };
    onSubmit(data);
  }

  function handleChange(changeEvent) {
    //This function allows to set a preview image before uploading it to cloudinary
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setReceipt(onLoadEvent.target.result);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  return (
    <Form onSubmit={handleSubmit} autocomplete="off">
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
      <Label>Beleg</Label>

      {receipt ? (
        <>
          <button onClick={() => setReceipt("")}>Foto löschen</button>
          <img src={receipt} />
        </>
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

      <FileInput
        type="file"
        ref={fileInputRef}
        id="file"
        name="file"
        onChange={handleChange}
        accept="image/*"
      />
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
