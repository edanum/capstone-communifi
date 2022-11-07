import styled from "styled-components";

export default function FilterElement({
  title,
  filteredData,
  setFilteredData,
}) {
    function toggleEntity() {
    console.log("t")
}

  return (
    <>
      <div>{title}</div>
      <EntityContainer>
        {[...new Set(filteredData?.map((element) => element.status))].map(
          (element) => (
            <Entity>
              <button onClick={toggleEntity}>T</button>
              <div>{element}</div>
            </Entity>
          )
        )}
      </EntityContainer>
    </>
  );
}

const EntityContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Entity = styled.div`
display: flex;
align-items: center;
gap: 10px;
`