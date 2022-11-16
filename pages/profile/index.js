import { useSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import Button from "../../components/buttons/button";
import { signOut } from "next-auth/react";
import Card from "../../components/card";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState();

  //PROTECT PAGE
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/login");
    },
  });

  //GET USER-DATA VIA USEEFFECT FETCH
  useEffect(() => {
    if (session) {
      fetch(`/api/users/${session.user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  }, [session?.user]);

  //BREAKPOINT FOR PROTECTION
  if (status === "loading") {
    return null;
  }
  //

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
          alt="GitHub Icon"
          height={200}
          width={200}
          objectFit="contain"
        />
      </ImageContainer>
      <Name>{session?.user.name}</Name>
      <Card>
        <ProfileDetails>
          <p>E-Mail:</p>
          <p>{user?.email}</p>
        </ProfileDetails>
        <ProfileDetails>
          <p>Team:</p>
          <p>{user?.team}</p>
        </ProfileDetails>
      </Card>
      <Button label="Ausloggen" onClick={handleSignOut} />
    </StyledProfile>
  );
}

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: var(--background-primary);
  border-radius: 50%;
  border: solid 2px var(--border);
`;
const Name = styled.h1`
  color: var(--headline);
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
`;
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 90%;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 30px;
`;
