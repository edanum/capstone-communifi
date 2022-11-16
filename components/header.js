import styled from "styled-components";
import { useRouter } from "next/router";
import SearchBar from "./search/searchBar";
import backButton from "../public/back_button.png";
import Image from "next/image";
import { printSubhead } from "../library/printSubhead";
import { getBackPath } from "../library/getBackPath";
import { useState } from "react";
import { useData, useDataUpdate } from "../context/DataContext";
import Logo from "./logo";
import { signOut } from "next-auth/react";
import LogoutButton from "./buttons/logoutButton";

export default function Header() {
  //GET GLOBAL DATA STATES
  const expenses = useData().expenses;
  const filteredExpenses = useData().filteredExpenses;
  const setFilteredExpenses = useDataUpdate().setFilteredExpenses;
  const revenues = useData().revenues;
  const filteredRevenues = useData().filteredRevenues;
  const setFilteredRevenues = useDataUpdate().setFilteredRevenues;
  //

  const [searchbarToggle, setSearchbarToggle] = useState();

  const { pathname } = useRouter();

   function handleSignOut() {
     signOut({
       callbackUrl: `/login`,
     });
   }
  return (
    <StyledHeader>
      {pathname === "/dashboard" ? (
        <>
          <Logo fontSize={"23px"} />
          <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      ) : pathname === "/profile" ? (
        <>
          <Logo fontSize={"23px"} />
            <SubTitle>{printSubhead(pathname)}</SubTitle>
           <LogoutButton/>
        </>
      ) : pathname === "/expenses" || pathname === "/revenues" ? (
        <>
          <Logo fontSize={"23px"} />
          {searchbarToggle ? null : (
            <SubTitle>{printSubhead(pathname)}</SubTitle>
          )}
          <SearchBar
            data={pathname === "/expenses" ? expenses : revenues}
            filteredData={
              pathname === "/expenses" ? filteredExpenses : filteredRevenues
            }
            setFilteredData={
              pathname === "/expenses"
                ? setFilteredExpenses
                : setFilteredRevenues
            }
            entityName="Ausgaben"
            setToggleIndicator={setSearchbarToggle}
          />
        </>
      ) : (
        <>
          <BackButton
            onClick={() => getBackPath(pathname)}
            src={backButton}
            width={40}
            height={35}
          />
          <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: var(--background-primary);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 20px 0px 20px;
  color: var(--headline);
  height: 55px;
  border-bottom: solid 1px var(--border);
`;

const SubTitle = styled.p`
  font-size: 18px;
`;

const BackButton = styled(Image)`
  cursor: pointer;
`;
