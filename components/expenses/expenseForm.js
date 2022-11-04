import styled, { ThemeConsumer } from "styled-components";
import { useState, useRef } from "react";
import addImageButton from "../../public/add_image_button.png";
import Image from "next/image";
import { uploadOnCloudinary } from "../../library/uploadOnCloudinary";

export default function ExpenseForm({ onSubmit, buttonLabel, expense }) {
  const fileInputRef = useRef();

  const [description, setDescription] = useState(expense?.description ?? "");
  const [amount, setAmount] = useState(expense?.amount ?? "");
  const [comment, setComment] = useState(expense?.comment ?? "");
  const [receipt, setReceipt] = useState(expense?.receipt ?? "");
  const [status, setStatus] = useState(expense?.status ?? "");

  async function handleSubmit(event) {
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
        "communifi_expenses"
      );
      setReceipt(uploadedFiles.secure_url);
    }

    //send all data to expenseAdd page (upload to MongoDB after that step)
    const data = {
      amount,
      description,
      comment,
      receipt,
      status,
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

      {receipt !== "" ? (
        <>
          <DeleteImageButton onClick={() => setReceipt("")}>
            Foto löschen
          </DeleteImageButton>

          <PreviewImageContainer>
            <Image
              src={receipt}
              layout="fill"
              objectFit="contain"
              alt="receipt"
            />
          </PreviewImageContainer>
        </>
      ) : (
        <UploadImageButton
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
      <Label htmlFor="comment">Kommentar</Label>
      <Textarea
        type="text"
        name="comment"
        id="comment"
        rows="5"
        value={comment}
        onChange={(event) => setComment(event.target.value)}
      />
      <Status>
        <p>Status</p>
        <StatusSelection>
          <StatusButton
            type="button"
            onClick={() => setStatus("Eingereicht")}
            status={status}
            indicator={"Eingereicht"}
          >
            Eingereicht
          </StatusButton>
          <StatusButton
            type="button"
            onClick={() => setStatus("Bezahlt")}
            status={status}
            indicator={"Bezahlt"}
          >
            Bezahlt
          </StatusButton>
        </StatusSelection>
      </Status>

      <SubmitButton type="submit">{buttonLabel}</SubmitButton>
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

const UploadImageButton = styled(Image)`
  cursor: pointer;
`;

const PreviewImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

const DeleteImageButton = styled.button`
  z-index: 2;
`;

const Status = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusButton = styled.button`
  display: flex;
  height: 30px;
  border-radius: 5px;
  border: solid 1px black;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ status, indicator }) =>
    status === "Eingereicht" && indicator === "Eingereicht"
      ? "orange"
      : status === "Bezahlt" && indicator === "Bezahlt"
      ? "green"
      : "none"};
`;

const StatusSelection = styled.div`
  display: flex;
  gap: 5px;
`;
