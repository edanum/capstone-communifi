import Logo from "../components/logo";
import styled from "styled-components";

export default function Login() {
  return (
    <StyledLogin>
      <Logo fontSize={"40px"} />
      <StyledForm>
        <StyledInput
          type="text"
          id="E-Mail"
          name="E-Mail"
          placeholder="E-Mail"
        />
        <StyledInput
          type="text"
          id="Password"
          name="Password"
          placeholder="Password"
        />
        <StyledButton>Login</StyledButton>
      </StyledForm>
      <CallToRegister>
        <p>No account yet?</p>
        <ToColor>Register!</ToColor>
      </CallToRegister>
    </StyledLogin>
  );
}

const CallToRegister = styled.section`
margin-top: 30px;
text-align: center;
font-size: 1.3rem;
`



const StyledButton = styled.button`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border: none;
  border-radius: 4px;
  height: 40px;
  background-color: #5676e6;
  font-size: 24px;
  color: #e7e1e1;
`;

const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 0px;
`;

const StyledForm = styled.form`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const StyledInput = styled.input`
  text-align: center;
  height: 40px;
  font-size: 20px;
  background-color: #d9d9d9;
  border: none;
  color: #8f8f8f;
`;

const ToColor = styled.p`
  color: #0570db;
  margin: 0px;
`;
