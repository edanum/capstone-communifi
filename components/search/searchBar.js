import styled from "styled-components";
import { useState } from "react";
import searchIcon from "../../public/search_icon.png";
import Image from "next/image";
import FilterBar from "./filterBar";
import filterIcon from "../../public/filter_icon.png";


export default function SearchBar({
  data,
  filteredData,
  setFilteredData,
  setToggleIndicator,
}) {
  const [searchToggle, setSearchToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);

  function handleToggle() {
    setSearchToggle(!searchToggle);
    setToggleIndicator(!searchToggle); // Passes Toggle State to Parent
    setFilteredData(data); // Delete all filters
  }

  function filterData(event) {
    const input = event.target.value;

    const searchResults = data.filter(
      (item) =>
        item.description.toLowerCase().includes(input.toLowerCase()) ||
        item.amount
          .toFixed(2)
          .replace(".", ",")
          .toLowerCase()
          .includes(input.toLowerCase()) ||
        item.name.toLowerCase().includes(input.toLowerCase()) ||
        item.dateOfSubmit.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(searchResults);
  }

  return (
    <>
      <Bar>
        {searchToggle ? (
          <StyledInput
            type="text"
            onChange={filterData}
            placeholder="tippe ..."
            name="search"
            id="search"
          ></StyledInput>
        ) : null}
        <label htmlFor="search">
          <Image
            onClick={handleToggle}
            src={searchIcon}
            alt="Search Icon"
            height={30}
            width={30}
            objectFit="contain"
          />
        </label>
        <FilterButton
          searchToggle={searchToggle}
          onClick={() => setFilterToggle(true)}
        >
          <Image
            onClick={handleToggle}
            src={filterIcon}
            alt="Filter Icon"
            height={30}
            width={30}
            objectFit="contain"
          />
        </FilterButton>

        <FilterBar
          filterToggle={filterToggle}
          setFilterToggle={setFilterToggle}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      </Bar>
    </>
  );
}

const Bar = styled.div`
  display: flex;
  height: 30px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const FilterButton = styled.button`
  display: ${({ searchToggle }) => (searchToggle ? "flex" : "none")};
  position: absolute;
  right: 65px;
  background-color: transparent;
  border: none;
`;

const StyledInput = styled.input`
  height: 38px;
  border-radius: 10px;
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  margin-right: 10px;
  background-color: var(--headline);
  color: var(--background-secondary);

  &:focus {
    outline: none !important;
    border-color: var(--button);
  }
`;
