import styled from "styled-components";
import { useRouter } from "next/router";
import SearchBar from "./searchBar";
import backButton from "../public/back_button.svg";
import Image from "next/image";
import { printSubhead } from "../library/printSubhead";
import { getBackPath } from "../library/getBackPath";
import { useState, useEffect } from "react";
import { useData, useDataUpdate } from "../context/DataContext";

export default function Header() {
  //GET GLOBAL DATA STATES
  const expenses = useData().expenses;
  const setFilteredExpenses = useDataUpdate().setFilteredExpenses;
  const revenues = useData().revenues;
  const setFilteredRevenues = useDataUpdate().setFilteredRevenues;
  //

  const [searchbarToggle, setSearchbarToggle] = useState();

  const { pathname } = useRouter();
  return (
    <StyledHeader>
      {pathname === "/" ? (
        false
      ) : pathname === "/dashboard" || pathname === "/profile" ? (
        <>
          <Title>CommuniFI</Title> <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      ) : pathname === "/expenses" || pathname === "/revenues" ? (
        <>
          <Title>CommuniFI</Title>
          {searchbarToggle ? null : (
            <SubTitle>{printSubhead(pathname)}</SubTitle>
          )}
          <SearchBar
            data={pathname === "/expenses" ? expenses : revenues}
            setData={
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
            width={50}
            height={50}
          />
          <SubTitle>{printSubhead(pathname)}</SubTitle>
        </>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  background-color: #cfd6de;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  padding: 0px 20px 0px 20px;
`;

const Title = styled.h1`
  font-size: 21px;
`;
const SubTitle = styled.p`
  font-size: 18px;
`;

const BackButton = styled(Image)`
  cursor: pointer;
`;
