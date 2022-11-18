import styled from "styled-components";
import { useState, useRef } from "react";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";
import { uploadOnCloudinary } from "../../library/uploadOnCloudinary";
import Input from "../formComponents/input";
import TextArea from "../formComponents/textArea";
import Button from "../buttons/button";
import { useSession } from "next-auth/react";

export default function RevenueForm({ onSubmit, buttonLabel, revenue }) {
  const fileInputRef = useRef();

  const [description, setDescription] = useState(revenue?.description ?? "");
  const [amount, setAmount] = useState(revenue?.amount ?? "");
  const [comment, setComment] = useState(revenue?.comment ?? "");
  const [receipt, setReceipt] = useState(revenue?.receipt ?? "");
  const { data: session } = useSession();

  async function handleSubmit(event, user) {
    event.preventDefault();
    const form = event.currentTarget;

    //Grab the File input, upload it on cloudinary and save the cloudinary data inside of the state receipt
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const fileList = fileInput.files;
    if (receipt) {
      const uploadedFiles = await uploadOnCloudinary(
        fileList,
        "communifi_revenues"
      );
      setReceipt(uploadedFiles.secure_url);
    }

    //send all data to revenueAdd page (upload to MongoDB after that step)
    const data = {
      amount,
      description,
      comment,
      receipt,
      user: user,
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
    <Form
      onSubmit={(event) => handleSubmit(event, session.user)}
      autocomplete="off"
    >
      <Label htmlFor="description">Beschreibung*</Label>
      <Input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        pattern=".*[^\s]{1,}.*"
        required
        autoFocus
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
        <ImagePreviewContainer>
          <Image
            src={receipt}
            layout="fill"
            objectFit="contain"
            alt="receipt"
          />
          <ImageDeleteButton onClick={() => setReceipt("")}>
            x
          </ImageDeleteButton>
        </ImagePreviewContainer>
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
      <Button type="submit" label={buttonLabel} />
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

const FileInput = styled.input`
  display: none;
`;

const ImageDeleteButton = styled.button`
  z-index: 2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  font-size: 20px;
  border: solid 2px var(--border);
  background-color: var(--background-primary);
  color: var(--paragraph);
  padding-bottom: 3px;
  cursor: pointer;
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

const Label = styled.label``;

