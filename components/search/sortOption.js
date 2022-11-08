import styled from "styled-components";
import { sortArray } from "../../library/sortArray";
import { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

export default function SortOption({
  title,
  filteredData,
  setFilteredData,
  attribute,
  activeSort,
  setActiveSort,
}) {
  const [filterState, setFilterState] = useState(0);
  const { pathname } = useRouter();

  function handleClick() {
    switch (filterState) {
      case 0:
        setFilterState(1);
        break;
      case 1:
        setFilterState(-1);
        break;
      case -1:
        setFilterState(1);
    }
    setFilteredData(sortArray(filteredData, attribute, filterState));
    setActiveSort(title);
    Router.push(pathname === "/expenses" ? "/expenses" : "revenues"); // RENDER NEU ANSTOSSEN
  }

  return (
    <StyledSortOption>
      <AttributeButton
        onClick={handleClick}
        activeSort={activeSort}
        title={title}
      >
        {title}
      </AttributeButton>
      <ArrowUp
        activeSort={activeSort}
        title={title}
        filterState={filterState}
        onClick={handleClick}
      >
        ▲
      </ArrowUp>
      <ArrowDown
        activeSort={activeSort}
        title={title}
        filterState={filterState}
        onClick={handleClick}
      >
        ▼
      </ArrowDown>
    </StyledSortOption>
  );
}

const StyledSortOption = styled.div`
  display: flex;
  width: 100%;
`;

const AttributeButton = styled.button`
  width: 100%;
  background-color: ${({ activeSort, title }) =>
    activeSort === title ? "#64A1E8" : "lightgray"};
  border-radius: 3px;
  border: none;
  height: 30px;
  border: "solid 1px #64A1E8";
`;

const ArrowDown = styled.div`
  border: ${({ activeSort, title, filterState }) =>
    activeSort === title && filterState === 1
      ? "solid 1px #64A1E8"
      : "lightgray"};
  background-color: ${({ activeSort, title, filterState }) =>
    activeSort === title && filterState === 1 ? "lightgray" : ""};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowUp = styled.div`
  border: ${({ activeSort, title, filterState }) =>
    activeSort === title && filterState === -1
      ? "solid 1px #64A1E8"
      : "lightgray"};
  background-color: ${({ activeSort, title, filterState }) =>
    activeSort === title && filterState === -1 ? "lightgray" : ""};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;
