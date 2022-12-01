import { useEffect, useRef } from "react";
import styled from "styled-components";
import lottie from "lottie-web";
import Router from "next/router";
import { useData } from "../context/DataContext";
import Logo from "../components/logo";
import Button from "../components/buttons/button";

export default function Home() {
  //GET GLOBAL DATA STATES TO PRELOAD DB DATA IN THE BACKGROUND
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
    <LandingPage>
      <Heading>
        Willkommen bei
        <Logo fontSize={"50px"} />
      </Heading>
      <IntroductionText>
        Toll, dass du dabei bist! Mit CommuniFI wird das managen gemeinsamer
        Konten und Finanzen zum Kinderspiel. Bist du bereit?
      </IntroductionText>
      <Animation ref={container} />
      <Button onClick={() => Router.push("/login")} label="Los gehts!" />
    </LandingPage>
  );
}

const Animation = styled.div`
  position: relative;
  width: 100%;
  margin: 20px auto;
`;

const Heading = styled.h1`
  color: var(--headline);
  text-align: center;
`;

const IntroductionText = styled.section`
  font-size: 20px;
  text-align: center;
`;

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  top: -60px;
`;
