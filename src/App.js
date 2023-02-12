import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { Helmet } from "react-helmet";
import HomePage from "./components/HomePage";
import FirstInfoPage from "./components/FirstInfoPage";
// import "./fonts/HelveticaNeue-LightExt.woff";
const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
  font-family: 'Helvetica Neue', sans-serif;
}
`;

function App() {
  const [isRezumeAddClicked, setIsResumeAddClicked] = useState(false);

  return (
    <>
      <GlobalStyles />
      {/* <Helmet>
        <link
          href="https://fonts.cdnfonts.com/css/helvetica-neue-9"
          rel="stylesheet"
        />
      </Helmet> */}
      {isRezumeAddClicked ? (
        <FirstInfoPage />
      ) : (
        <HomePage resumeClicked={() => setIsResumeAddClicked(true)} />
      )}
    </>
  );
}

export default App;
