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
      <Link href="/dashboard">
        <NavElement active={pathname === "/dashboard"}>
          <Image
            src={dashboardIcon}
            alt="Dashboard Icon"
            height={30}
            width={25}
            objectFit="contain"
          />
          <p>Dashboard</p>
        </NavElement>
      </Link>
      <Link href="/expenses">
        <NavElement active={pathname.includes("/expenses")}>
          <Image
            src={expensesIcon}
            alt="Expenses Icon"
            height={30}
            width={25}
            objectFit="contain"
          />
          <p>Ausgaben</p>
        </NavElement>
      </Link>
      <Link href="/revenues">
        <NavElement active={pathname.includes("/revenues")}>
          <Image
            src={revenuesIcon}
            alt="Revenues Icon"
            height={30}
            width={25}
            objectFit="contain"
          />
          <p>Einnahmen</p>
        </NavElement>
      </Link>
    
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-color: var(--background-primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 20px 20px 0px 0px;
  border-top: solid 1px var(--border);
`;

const NavElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ active }) => active && `background-color: var(--accent-color);`};
  width: 100%;
  height: 60px;
  cursor: pointer;
  border-top: solid 1px var(--border);

  & p {
    ${({ active }) => active && `color: var(--button-text);`};
    font-size: 0.7rem;
    margin-top: 3px;
  }

  &:first-child {
    border-radius: 20px 0px 0px 0px;
    border-right: solid 1px var(--border);
  }
  &:last-child {
    border-radius: 0px 20px 0px 0px;
    border-left: solid 1px var(--border);
  }
`;
