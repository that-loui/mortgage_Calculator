import ResultPage from "./ResultSlide";
import Form from "./Form";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;
  height: 100%;

  @media (min-width: 769px) {
    flex-direction: row;
    border-radius: 20px;
  }
`;
function MortgageApp() {
  const [result, setResult] = useState({ monthly: "", total: "" });

  function updateResult(monthlyResult, totalResult) {
    setResult((prev) => ({
      ...prev,
      monthly: monthlyResult,
      total: totalResult,
    }));
  }

  function clearResult(){
    setResult((prev) => ({
      ...prev,
      monthly: '',
      total: '',
    }));
  }
  return (
    <Container>
      <Form postResult={updateResult} clearResults={clearResult}/>
      <ResultPage monthlyResult={result.monthly} totalResult={result.total}/>
    </Container>
  );
}

export default MortgageApp;
