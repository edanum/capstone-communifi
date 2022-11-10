import Image from "next/image";
import editButton from "../../public/edit_button.png";
import styled from "styled-components";

export default function EditButton() {
  return (
    <ToPosition>
      <Image src={editButton} width={70} height={70} alt="edit Button" />
    </ToPosition>
  );
}

const ToPosition = styled.button`
  position: fixed;
  bottom: 60px;
  right: 10px;
  z-index: 3;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
