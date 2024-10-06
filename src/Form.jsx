import styled from "styled-components";
import { useState } from "react";
import InputField from "./Input";
import RadioBtn from "./RadioBtn";
import Icon from "./assets/icon-calculator.svg";

const Container = styled.div`
  padding: 1rem;
  flex: 1;
`;

const FormHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderText = styled.h3`
  color: #1b3848;
  font-size: 20px;

  @media (min-width: 1439px) {
    font-size: 25px;
  }
`;

const ClearBtn = styled.button`
  color: #1b3848;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #29383d;
  }
`;

const FormBody = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputPair = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const SubmitBtn = styled.button`
  background-color: #dbdb2f;
  color: #1b3848;
  border: none;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  padding: 1rem;
  margin: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const SubmitIcon = styled.img`
  margin-right: 0.5rem;
`;

function Form({ postResult, clearResults }) {
  const [selected, setSelected] = useState("");
  const [inputValues, setInputValues] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [errors, setErrors] = useState({
    errorAmount: false,
    errorTerm: false,
    errorRate: false,
    errorType: false,
  });

  function handleInputChange(e, input) {
    e.preventDefault();

    setInputValues((prevValues) => ({
      ...prevValues,
      [input]: e.target.value,
    }));
  }

  function handleSelection(selection) {
    setSelected(selection);
    setInputValues((prevValues) => ({ ...prevValues, type: selection }));
  }

  function validateInputs(amount, term, rate, type) {
    const errors = {};
    if (!amount) {
      errors.errorAmount = "This field is required";
    }
    if (!term) {
      errors.errorTerm = "This field is required";
    }
    if (!rate) {
      errors.errorRate = "This field is required";
    }
    if (!type) {
      errors.errorType = "This field is required";
    }
    return errors;
  }

  function handleCalculation(amount, years, rate) {
    const monthlyRate = rate / 100 / 12;
    const monthlyTerm = years * 12;

    const monthlyPayment =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, monthlyTerm)) /
      (Math.pow(1 + monthlyRate, monthlyTerm) - 1);

    return monthlyPayment;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateInputs(
      inputValues.amount,
      inputValues.term,
      inputValues.rate,
      inputValues.type
    );
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    let monthlyResult = handleCalculation(
      inputValues.amount,
      inputValues.term,
      inputValues.rate
    );
    let totalResult = monthlyResult * inputValues.term * 12;
    postResult(
      monthlyResult.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
      totalResult.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    );
  }

  function clearAll() {
    setInputValues((prev) => ({
      ...prev,
      amount: "",
      term: "",
      rate: "",
      type: selected,
    }));
    handleSelection('');
    clearResults();
  }
  return (
    <Container>
      <FormHeader>
        <HeaderText>Mortgage Calculator</HeaderText>
        <ClearBtn onClick={() => clearAll()}>Clear All</ClearBtn>
      </FormHeader>
      <FormBody onSubmit={(e) => handleSubmit(e)}>
        <InputField
          labelText={"Mortgage Amount"}
          infoText={"£"}
          flexDirection={"row"}
          type={"number"}
          value={inputValues.amount}
          onChange={(e) => handleInputChange(e, "amount")}
          catchError={errors.errorAmount}
        />
        <InputPair>
          <InputField
            labelText={"Mortgage Term"}
            infoText={"years"}
            flexDirection={"row-reverse"}
            type={"number"}
            value={inputValues.term}
            onChange={(e) => handleInputChange(e, "term")}
            catchError={errors.errorTerm}
          />
          <InputField
            labelText={"Interest Rate"}
            infoText={"%"}
            flexDirection={"row-reverse"}
            type={"number"}
            onChange={(e) => handleInputChange(e, "rate")}
            value={inputValues.rate}
            catchError={errors.errorRate}
          />
        </InputPair>
        <RadioBtn
          onClick={handleSelection}
          selection={selected}
          catchError={errors.errorType}
        />
        <SubmitBtn>
          <SubmitIcon src={Icon} />
          Calculate Repayments
        </SubmitBtn>
      </FormBody>
    </Container>
  );
}

export default Form;
