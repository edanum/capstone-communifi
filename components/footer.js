import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import dashboardIcon from "../public/dashboard_icon.png";
import expensesIcon from "../public/expenses_icon.png";
import revenuesIcon from "../public/revenues_icon.png";
import profileIcon from "../public/profile_icon.png";

export default function Footer() {
  const { pathname } = useRouter();

  return (
      <StyledFooter>
        <Link href="/">
          <NavElement active={pathname === "/"}>
            <Image
              src={dashboardIcon}
              alt="Dashboard Icon"
              height={50}
              objectFit="contain"
            />
          </NavElement>
        </Link>
        <Link href="/expenses">
          <NavElement active={pathname === "/expenses"}>
            <Image
              src={expensesIcon}
              alt="Expenses Icon"
              height={50}
              objectFit="contain"
            />
          </NavElement>
        </Link>
        <Link href="/revenues">
          <NavElement active={pathname === "/revenues"}>
            <Image
              src={revenuesIcon}
              alt="Revenues Icon"
              height={50}
              objectFit="contain"
            />
          </NavElement>
        </Link>
        <Link href="/profile">
          <NavElement active={pathname === "/profile"}>
            <Image
              src={profileIcon}
              alt="Profile Icon"
              height={50}
              objectFit="contain"
            />
          </NavElement>
        </Link>
      </StyledFooter>
  );
}

const StyledFooter = styled.div`
  background-color: #cfd6de;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const NavElement = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${({ active }) => (active ? "#64A1E8" : "none")};
  width: 100%;
  height: 50px;
  padding: 10px;
`;
