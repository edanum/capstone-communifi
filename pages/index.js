import { useEffect, useRef } from "react";
import Head from "next/head";
import styled from "styled-components";
import lottie from "lottie-web";
import Router from "next/router";

export default function Home() {
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

  return (
    <Dashboard>
      <Head>
        <title>CommuniFI</title>
      </Head>
      <Heading>
        Welcome to{" "}
        <Logo>
          Communi<ToColor>FI</ToColor>
        </Logo>
      </Heading>
      <IntroductionText>
        Great to have you on board! Lets start to create your personal Dashboard
        for you and your team!
      </IntroductionText>
      <Animation ref={container} />
      <CallToAction>Ready to go? Well then, first:</CallToAction>
      <Button onClick={() => Router.push("/expenses")}>
        Manage your expenses
      </Button>
    </Dashboard>
  );
}

const Dashboard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -40px;
`;
const Main = styled.main`
  text-align: center;
`;

const Animation = styled.div`
  position: relative;
  top: -50px;
  width: 100%;
`;

const IntroductionText = styled.section`
  font-size: 20px;
  text-align: center;
`;

const Heading = styled.h1`
  margin-top: 0px;
  text-align: center;
`;

const ToColor = styled.p`
  color: #0570db;
  margin: 0px;
`;
const Logo = styled.section`
  display: flex;
  justify-content: center;
`;

const CallToAction = styled.section`
  font-size: 20px;
  text-align: center;
  position: relative;
  top: -100px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  color: white;
  background-color: #0570db;
  position: relative;
  top: -60px;
  font-size: 24px;
`;
