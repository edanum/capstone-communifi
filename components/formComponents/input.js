import styled from "styled-components";

export default function Input({
  type,
  step,
  name,
  id,
  min,
  max,
  value,
  required,
  pattern,
  onChange,
  placeholder,
}) {
  return (
    <StyledInput
      type={type}
      step={step}
      name={name}
      id={id}
      min={min}
      max={max}
      value={value}
      required={required}
      pattern={pattern}
      onChange={onChange}
      placeholder={placeholder}
    ></StyledInput>
  );
}

const StyledInput = styled.input`
  background-color: var(--card-background);
  height: 40px;
  font-size: 18px;
  color: var(--card-paragraph);
  border: solid 1px var(--border);
  border-radius: 7px;
  padding: 10px;

  &:focus {
    outline: none !important;
    border-color: var(--button);
  }

  ::placeholder {
    color: #8f8f8f;
    text-align: center;
  }
`;
