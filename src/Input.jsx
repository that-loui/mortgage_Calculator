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
  flex-direction: ${({direction}) => direction};
  border: 1.5px solid #76898f;
  border-color: ${({error_border}) => error_border};
  border-radius: 3px;

  &:hover{
    border-color: #1b3848;
  }
`;

const InputInfo = styled.span`
  background-color: ${({error_background}) => error_background};
  padding: 0.4rem 0.8rem;
  font-weight: 700;
  color: ${({error_color})=> error_color} ;
  text-align: center;
  font-size: 20px;

`;

const AppInput = styled.input`
  border: none;
  width: 100%;
  padding: 0.4rem;

  &:focus {
    outline: none;
  }
`;

const ErrorElement = styled.p`
  color: #d63427;
  margin-top: 0.5rem;
`

function InputField({ onChange, labelText, infoText, flexDirection, type, value, catchError}) {
  return (
    <Field>
      <Label>{labelText}</Label>
      <InputContainer direction={flexDirection} error_border={catchError ? '#D63427' : '#76898f' }>
        <InputInfo error_color={catchError ? '#fff' : '#4F6B77'} error_background={catchError ? '#D63427' : '#E3F4FC'}>{infoText}</InputInfo>
        <AppInput onChange={onChange} type={type} value={value}/>
      </InputContainer>
      {catchError && <ErrorElement>{catchError}</ErrorElement>}
    </Field>
  );
}

export default InputField;
