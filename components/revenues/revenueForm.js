import styled from "styled-components";
import { useState, useRef } from "react";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";
import { uploadOnCloudinary } from "../../library/uploadOnCloudinary";
import Input from "../formComponents/input";
import TextArea from "../formComponents/textArea";
import Button from "../buttons/button";

export default function RevenueForm({ onSubmit, buttonLabel, revenue }) {
  const fileInputRef = useRef();

  const [description, setDescription] = useState(revenue?.description ?? "");
  const [amount, setAmount] = useState(revenue?.amount ?? "");
  const [comment, setComment] = useState(revenue?.comment ?? "");
  const [receipt, setReceipt] = useState(revenue?.receipt ?? "");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    //Grab the File input, upload it on cloudinary and save the cloudinary data inside of the state receipt
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const fileList = fileInput.files;
    const uploadedFiles = await uploadOnCloudinary(
      fileList,
      "communifi_revenues"
    );
    setReceipt(uploadedFiles.secure_url);

    //send all data to revenueAdd page (upload to MongoDB after that step)
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
      <Label>Beleg:</Label>

      {receipt !== "" ? (
        <>
          <ImageDeleteButton onClick={() => setReceipt("")}>
            Foto löschen
          </ImageDeleteButton>
          <ImagePreviewContainer>
            <Image
              src={receipt}
              layout="fill"
              objectFit="contain"
              alt="receipt"
            />
          </ImagePreviewContainer>
        </>
      ) : (
        <ImageUploadButton
          src={addImageButton}
          objectFit="contain"
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
      <Label htmlFor="comment">Kommentar:</Label>
      <TextArea
        type="text"
        name="comment"
        id="comment"
        rows="5"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <Button type="submit" label={buttonLabel}/>
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

const ImagePreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const ImageDeleteButton = styled.button`
  z-index: 2;
`;
