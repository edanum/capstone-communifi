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
      {/* <Link href="/">
        <NavElement active={pathname === "/"}>
          <Image
            src={dashboardIcon}
            alt="Dashboard Icon"
            height={50}
            objectFit="contain"
          />
        </NavElement>
      </Link> */}
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
      {/* <Link href="/revenues">
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
      </Link> */}
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: #cfd6de;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavElement = styled.div`
  display: flex;
  justify-content: center;
  ${({ active }) => active && `background-color: #64A1E8;`};
  width: 100%;
  height: 50px;
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`;
