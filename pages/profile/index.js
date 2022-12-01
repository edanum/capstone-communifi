import { getSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import Card from "../../components/card";
import { useEffect, useState } from "react";
import EditButton from "../../components/buttons/editButton";
import Link from "next/link";

export default function Profile({ user }) {
  const [fullUserData, setFullUserData] = useState("");

  //GET USER-DATA VIA USEEFFECT FETCH
  useEffect(() => {
    fetch(`/api/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFullUserData(data);
      });
  }, []);
  //

  return (
    <StyledProfile>
      <ImageContainer>
        {fullUserData.image ? (
          <StyledImage
            src={fullUserData.image}
            alt="GitHub Icon"
            height={200}
            width={200}
            objectFit="contain"
          />
        ) : null}
      </ImageContainer>
      <Name>{fullUserData.name}</Name>
      <Card>
        <ProfileDetail>
          <Attribute>E-Mail:</Attribute>
          <Data>{fullUserData.email}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Wohnort:</Attribute>
          <Data>{fullUserData.city}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>PLZ:</Attribute>
          <Data>{fullUserData.plz}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Straße:</Attribute>
          <Data>{fullUserData.street}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>IBAN:</Attribute>
          <Data>{fullUserData.iban}</Data>
        </ProfileDetail>
        <ProfileDetail>
          <Attribute>Team:</Attribute>
          <Data>{fullUserData.team}</Data>
        </ProfileDetail>
        <Link href={`/profile/edit/${fullUserData.id}`}>
          <a>
            <EditButton />
          </a>
        </Link>
      </Card>
    </StyledProfile>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: session,
  };
}

const Attribute = styled.p`
  width: 60%;
`;

const Data = styled.p`
  width: 100%;
`;

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
const ProfileDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: 5px 0px;
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
