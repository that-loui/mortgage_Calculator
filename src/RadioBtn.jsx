import styled from "styled-components";

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Label = styled.label`
  color: #1b3848c5;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: none;
  align-items: center;
  border: 1.5px solid;
  border-color: ${({ border_c }) => border_c};
  border-radius: 3px;
  padding: 0.5rem 0.8rem;
  margin: 0.5rem 0;
  background-color: ${({ b_color }) => b_color};
  cursor: pointer;

  &:hover {
    border-color: #d5dd25;
  }
`;

const InputInfo = styled.span`
  padding: 0.3rem 1.2rem;
  font-weight: 700;
  color: #1b3848;
  text-align: center;
  font-size: 20px;
`;

const AppInput = styled.div`
  background-color: ${({ b_color }) => b_color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid;
  border-color: ${({ border_c }) => border_c};
  padding: 0.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  background-color: ${({ b_color }) => b_color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: block;
`;

const ErrorElement = styled.p`
  color: #d63427;
  margin-top: 0.5rem;

`;

function RadioBtn({ onClick, selection, catchError}) {
  return (
    <Field>
      <Label>Mortgage Type</Label>
      <InputContainer
        onClick={() => {
          onClick("a");
        }}
        b_color={selection === "a" ? "#FAFAE0" : ""}
        border_c={selection === "a" ? "#D5DD25" : "#76898f"}
      >
        <AppInput border_c={selection === "a" ? "#D5DD25" : "#76898f"}>
          <Span b_color={selection === "a" ? "#D5DD25" : ""} />
        </AppInput>
        <InputInfo>Repayment</InputInfo>
      </InputContainer>
      <InputContainer
        onClick={() => {
          onClick("b");
        }}
        b_color={selection === "b" ? "#FAFAE0" : ""}
        border_c={selection === "b" ? "#D5DD25" : "#76898f"}
      >
        <AppInput border_c={selection === "b" ? "#D5DD25" : "#76898f"}>
          <Span b_color={selection === "b" ? "#D5DD25 " : ""} />
        </AppInput>
        <InputInfo>Interest Only</InputInfo>
      </InputContainer>
        {catchError && <ErrorElement>{catchError}</ErrorElement>}
    </Field>
  );
}

export default RadioBtn;
