import styled from "styled-components";
import HeroImg from "./assets/illustration-empty.svg";

const Container = styled.div`
  background-color: #133040;
  color: #8cabbd;
  padding: 5rem 1rem;
  flex: 1;

  @media (min-width: 769px) {
    padding: 1rem;
    border-radius: 0px 20px 20px 40px;
  }
`;

const PreResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const PreResultImg = styled.img``;
const PreResultHeader = styled.h2`
  color: #fff;
  font-size: 22px;
  margin: 1rem 0;
`;
const PreResultText = styled.p`
  text-align: center;
  width: 90%;
  color: #718ea0;
`;
const PreResult = () => (
  <PreResultContainer>
    <PreResultImg src={HeroImg} />
    <PreResultHeader>Results shown here</PreResultHeader>
    <PreResultText>
      Complete the form and click “calculate repayments” to see what your
      monthly repayments would be.
    </PreResultText>
  </PreResultContainer>
);

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 1rem;

  @media (min-width: 769px) {
    padding: 1rem;
    border-radius: 0px 20px 20px 40px;
    flex: 1;
  }
`;
const ResultHeader = styled.h2`
  text-align: start;
  width: 100%;
  color: #fff;
`;
const ResultText = styled.p`
  line-height: 1.5;
  font-size: 16px;
  margin: 1rem 0;
`;

const ResultBox = styled.div`
  border-top: 5px solid #d4dc48;
  border-radius: 5px;
  background-color: #0e2431;
  width: 100%;
  padding: 2rem;
  margin: 1rem 0;
`;

const ResultBoxHeader = styled.p`
  color: #718ea0;
`;
const Results = styled.h1`
  color: #d4dc48;
  font-size: 2.3rem;
  margin-top: 0.8rem;
  width: 80%;
  word-break: break-all;

  @media (min-width: 1020px) {
    font-size: 3.3rem;
  }
`;

const ResultBoxInfoText = styled.p`
  color: #718ea0;
`;
const RepaymentResult = styled.h2`
  color: #fff;
  margin-top: 0.5rem;
`;

const Hr = styled.div`
  height: 0.8px;
  width: 100%;
  background-color: #718ea0;
  margin: 2rem 0;
`;

const Result = ({ monthlyPayments, totalPayments }) => (
  <ResultContainer>
    <ResultHeader>Your Results</ResultHeader>
    <ResultText>
      Your results are shown below based on the information you provided. To
      adjust the results, edit the form and click “calculate repayments” again.
    </ResultText>
    <ResultBox>
      <ResultBoxHeader>Your monthly repayments</ResultBoxHeader>
      <Results>£{monthlyPayments}</Results>
      <Hr />
      <ResultBoxInfoText>Total you'll repay over the term</ResultBoxInfoText>
      <RepaymentResult>£{totalPayments}</RepaymentResult>
    </ResultBox>
  </ResultContainer>
);

function ResultPage({ monthlyResult, totalResult }) {
  return (
    <Container>
      {monthlyResult !== "" ? (
        <Result monthlyPayments={monthlyResult} totalPayments={totalResult} />
      ) : (
        <PreResult />
      )}
    </Container>
  );
}

export default ResultPage;
