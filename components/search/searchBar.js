import styled from "styled-components";
import { useRef, useState } from "react";
import searchIcon from "../../public/search_icon.svg";
import Image from "next/image";
import FilterBar from "./filterBar";

export default function SearchBar({ data, filteredData, setFilteredData, setToggleIndicator }) {
  const [iconToggle, setIconToggle] = useState(false);
  const [filterToggle, setFilterToggle] = useState(false);



  function handleToggle() {
    setIconToggle(!iconToggle);
    setToggleIndicator(!iconToggle); // Passes Toggle State to Parent
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
        {iconToggle ? (
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
        <FilterButton onClick={() => setFilterToggle(true)}>F</FilterButton>
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
  display: inline;
  position: absolute;
  right: 65px;
`;

const StyledInput = styled.input`
  height: 40px;
  border-radius: 10px;
  border: solid 1px var(--accent-color);
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  margin-right: 10px;
`;
