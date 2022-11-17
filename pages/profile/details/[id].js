import styled from "styled-components";
import { getLoadingAnimation } from "../../../library/getLoadingAnimation";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import Image from "next/image";
import Card from "../../../components/card";

export default function ProfileDetails() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //PREPARE LOTTIE ANIMATION (LOADING)
  const container = useRef(null);
  useEffect(() => {
    getLoadingAnimation(container);
  }, []);
  //

  //PROTECT PAGE
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      Router.push("/login");
    },
  });
  //

  //GET DATA VIA USEEFFECT FETCH
  useEffect(() => {
    const pathArray = window.location.pathname.split("/");
    const id = pathArray[3];
    setLoading(true);
    fetch(`/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
 
  if (isLoading)
    return <AnimationContainer ref={container}></AnimationContainer>;
  if (!data) return <AnimationContainer ref={container}></AnimationContainer>;
  //
 if (status === "loading") { //BREAKPOINT FOR PROTECTED PAGE
   return null;
 }
  const user = data;
  return (
    <>
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
        </Card>
      </StyledProfile>
    </>
  );
}
const AnimationContainer = styled.div`
  height: calc(100vh - 140px);
`;

const StyledExpenseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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