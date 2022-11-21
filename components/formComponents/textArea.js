import styled from "styled-components";

export default function TextArea({ type, name, id, rows, value, onChange }) {
  return (
    <StyledTextArea
      type={type}
      name={name}
      id={id}
      rows={rows}
      value={value}
      onChange={onChange}
    />
  );
}

const StyledTextArea = styled.textarea`
  background-color: var(--card-background);
  font-family: var(--font-family);
  border: solid 1px var(--border);
  font-size: 18px;
  color: var(--card-paragraph);
  border: solid 1px var(--border);
  border-radius: 7px;
  padding: 10px;

  &:focus {
    outline: none !important;
    border-color: var(--button);
  }
`;
