import styled from "styled-components";
import { useEffect, useState } from "react";
import searchIcon from "../public/search_icon.svg";
import Image from "next/image";

export default function SearchBar({ data, setData, setToggleIndicator }) {
  const [filteredData, setFilteredData] = useState(data);
  const [iconToggle, setIconToggle] = useState(false);

  function handleToggle() {
    setIconToggle(!iconToggle);
    setToggleIndicator(!iconToggle);
    // setData(data);
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
    setData(searchResults);
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
          ></StyledInput>
        ) : null}
        <Image
          onClick={handleToggle}
          src={searchIcon}
          alt="Search Icon"
          height={30}
          width={30}
          objectFit="contain"
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

const StyledInput = styled.input`
  height: 40px;
  border-radius: 10px;
  border: solid 1px var(--accent-color);
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  margin-right: 10px;
`;
