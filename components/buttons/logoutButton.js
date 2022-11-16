import { signOut } from "next-auth/react";
import Image from "next/image";
import logoutButton from "../../public/logout_icon.png";
import styled from "styled-components";

export default function LogoutButton() {


  return (
    <>
      <Box>
        <StyledImage
          onClick={signOut}
          src={logoutButton}
          alt="Dashboard Icon"
          height={30}
          width={25}
          objectFit="contain"
        />
      </Box>
    </>
  );
}
const Box = styled.div`
width: 100%;
text-align: right;
`

const StyledImage = styled(Image)`
  cursor: pointer;
`;
