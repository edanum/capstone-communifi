import { useEffect, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import lottie from "lottie-web";
import Router from "next/router";
import { useData } from "../context/DataContext";
import Logo from "../components/logo";

export default function Home() {
  //GET GLOBAL DATA STATES TO PRELOAD DB DATA IN THE BACKGROUND
  const revenues = useData().revenues;
  const expenses = useData().expenses;
  const mutateExpenses = useData().mutateExpenses;
  const mutateRevenues = useData().mutateRevenues;
  mutateExpenses();
  mutateRevenues();
  //

  //SHOW ANIMATION
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../public/budgeting_animation.json"),
    });
  }, []);
  //

  return (
    <Dashboard>
      <Head>
        <title>CommuniFI</title>
      </Head>
      <Heading>
        Welcome to
        <Logo fontSize={"50px"} />
      </Heading>
      <IntroductionText>
        Great to have you on board! Lets start to create your personal Dashboard
        for you and your team!
      </IntroductionText>
      <Animation ref={container} />
      <Button onClick={() => Router.push("/login")}>Lets start!</Button>
    </Dashboard>
  );
}

const Animation = styled.div`
  position: relative;
  width: 100%;
  margin: 30px auto;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin: 30px auto;
  color: white;
  background-color: #0570db;
  position: relative;
  font-size: 24px;
  cursor: pointer;
`;

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  top: -30px;
`;

const Heading = styled.h1`
  margin-top: 0px;

  text-align: center;
`;

const IntroductionText = styled.section`
  font-size: 20px;
  text-align: center;
`;


