import styled from "styled-components";
import SortOption from "./sortOption";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FilterBar({
  data,
  filteredData,
  setFilteredData,
  filterToggle,
  setFilterToggle,
}) {
  const [activeSort, setActiveSort] = useState("Datum");
  const { pathname } = useRouter();
  return (
    <FilterContainer filterToggle={filterToggle}>
      <StyledFilterBar>
        <Navigation>
          <CloseButton onClick={() => setFilterToggle(false)}>x</CloseButton>
          <b>Sortierung/Filter</b>
        </Navigation>
        <p>Sortieren nach:</p>
        <SortOption
          title="Datum"
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          attribute="receiptNumber"
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
        <SortOption
          title="Beschreibung"
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          attribute="description"
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
        <SortOption
          title="Betrag"
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          attribute="amount"
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
        {pathname === "/expenses" && (
          <SortOption
            title="Status"
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            attribute="status"
            activeSort={activeSort}
            setActiveSort={setActiveSort}
          />
        )}
        <SortOption
          title="Person"
          filteredData={filteredData}
          setFilteredData={setFilteredData}
          attribute="name"
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />
      </StyledFilterBar>
      <BackgroundDarkener
        onClick={() => setFilterToggle(false)}
      ></BackgroundDarkener>
    </FilterContainer>
  );
}
const CloseButton = styled.button`
border-radius: 50%;
background-color: var(--button);
border: var(--border);
color: var(--button-text)
`

const FilterContainer = styled.div`
  display: ${({ filterToggle }) => (filterToggle === false ? "none" : "flex")};
`;

const StyledFilterBar = styled.div`
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  height: 100vh;
  width: 180px;
  padding: 10px;
`;

const BackgroundDarkener = styled.div`
  background-color: #00000067;
  position: absolute;
  top: 0px;
  right: 180px;
  left: 0px;
  bottom: 0px;
  height: 100vh;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;
