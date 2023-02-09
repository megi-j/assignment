import styled from "styled-components";
import bg from "../images/bg.png";
import logo from "../images/LOGO.png";
import logo2 from "../images/LOGO-2.png";

export default function HomePage(props) {
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Main>
        <Button onClick={props.resumeClicked}>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</Button>
        <Logo src={logo2} />
      </Main>
    </Container>
  );
}
const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-image: url(${bg});
`;
const Header = styled.header`
  width: 90%;
  height: 89px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a1a1a;
`;
const Button = styled.button`
  width: 464px;
  height: 60px;
  background: #1a1a1a;
  border-radius: 8px;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  z-index: 1;
  cursor: pointer;
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Logo = styled.img`
  z-index: 10;
  position: absolute;
  top: 45%;
  left: 55%;
`;
