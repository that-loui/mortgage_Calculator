import MortgageApp from "./MortgageApp";
import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    padding: 14rem 7rem;
  }

  @media (min-width: 1025px){
    padding: 14rem;
  }
`;

function App() {
  return (
    <AppContainer>
      <MortgageApp />
    </AppContainer>
  );
}

export default App;
