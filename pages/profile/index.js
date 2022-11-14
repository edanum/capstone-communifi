import { useSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import Button from "../../components/buttons/button";
import { signOut } from "next-auth/react";
export default function Profile() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut({
      callbackUrl: `/login`,
    });
  }

  return (
    <StyledProfile>
      <ImageContainer>
        <StyledImage
          src={session?.user.image}
          alt="Revenues Icon"
          height={200}
          width={200}
          objectFit="contain"
        />
      </ImageContainer>
      <Name>{session?.user.name}</Name>
      <ProfileDetails>
        <p>E-Mail:</p>
        <p>{session?.user.email}</p>
      </ProfileDetails>
      <Button label="Ausloggen" onClick={handleSignOut} />
    </StyledProfile>
  );
}

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-primary);
  border-radius: 50%;
`;
const Name = styled.h1``;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 90%;
`;

const ProfileDetails = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;
