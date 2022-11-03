import { useState } from "react";

export default function SearchBar({ data, setData }) {
  const [fileredData, setFilteredData] = useState(data);

  function filterData(event) {
    const input = event.target.value;
    const searchResults = data.filter((item) =>
      item.description.toLowerCase().includes(input.toLowerCase())
    );
    setData(searchResults);
  }

  return (
    <input type="text" onChange={filterData} placeholder="tippe ..."></input>
  );
}
