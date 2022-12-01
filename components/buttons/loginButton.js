import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import GitHubIcon from "../../public/github_logo.png";

export default function LoginButton() {
  const { data: session } = useSession();

  return (
    <>
      <Button
        onClick={() =>
          signIn("github", {
            callbackUrl: "/",
          })
        }
      >
        <Image
          src={GitHubIcon}
          alt="GitHub Icon"
          height={28}
          width={28}
          objectFit="contain"
        />
        <p>Login mit GitHub</p>
      </Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: relative;
  margin-top: 15px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background-color: black;
  color: var(--paragraph);
  height: 40px;
  border: solid 2px var(--border);
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  width: 100%;
`;
