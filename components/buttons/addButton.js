import Image from "next/image";
import addButton from "../../public/add_button.png";
import styled from "styled-components";

export default function AddButton() {
  return (
    <ToPosition>
      <Image src={addButton} width={60} height={60} alt="addButton" />
    </ToPosition>
  );
}

const ToPosition = styled.button`
  position: fixed;
  bottom: 65px;
  right: 10px;
  z-index: 3;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
