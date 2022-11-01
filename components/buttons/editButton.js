import Image from "next/image";
import editButton from "../../public/edit_button.svg";
import styled from "styled-components";

export default function EditButton() {
  return (
    <ToPosition>
      <Image src={editButton} width={60} height={60} alt="edit Button" />
    </ToPosition>
  );
}

const ToPosition = styled.button`
  position: fixed;
  bottom: 60px;
  right: 15px;
  z-index: 3;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
