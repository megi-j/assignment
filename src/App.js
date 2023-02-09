import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePage";
import FirstInfoPage from "./components/FirstInfoPage";

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}
`;

function App() {
  const [isRezumeAddClicked, setIsResumeAddClicked] = useState(false);

  return (
    <>
      <GlobalStyles />
      <Helmet></Helmet>
      {isRezumeAddClicked ? (
        <FirstInfoPage />
      ) : (
        <HomePage resumeClicked={() => setIsResumeAddClicked(true)} />
      )}
    </>
  );
}

export default App;
