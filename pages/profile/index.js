import { useSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import Card from "../../components/card";
import Router from "next/router";
import { useEffect, useState } from "react";
import EditButton from "../../components/buttons/editButton";
import Link from "next/link";

export default function Profile() {
  const [user, setUser] = useState("");

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

  // WAIT UNTIL USER DATA IS AVAILABLE
  while (user === "") {
    return null;
  }
  //

  return (
    <StyledProfile>
      <ImageContainer>
        <StyledImage
          src={user?.image}
          alt="GitHub Icon"
          height={200}
          width={200}
          objectFit="contain"
        />
      </ImageContainer>
      <Name>{user?.name}</Name>
      <Card>
        <ProfileDetail>
          <Attribute>E-Mail:</Attribute>
          <Data>{user?.email}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Wohnort:</Attribute>
          <Data>{user?.city}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>PLZ:</Attribute>
          <Data>{user?.plz}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Straße:</Attribute>
          <Data>{user?.street}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>IBAN:</Attribute>
          <Data>{user?.iban}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Team:</Attribute>
          <Data>{user?.team}</Data>
        </ProfileDetail>
        <Link href={`/profile/edit/${user.id}`}>
          <a>
            <EditButton />
          </a>
        </Link>
      </Card>
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
  width: 90%;
  max-width: 400px;
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
`;

const Attribute = styled.p`
  width: 60%;
`;

const Data = styled.p`
  width: 100%;
`;
