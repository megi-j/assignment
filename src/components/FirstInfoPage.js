import styled from "styled-components";
import arrow from "../images/Vector.png";
import FormBox from "./FormBox";

export default function FirstInfoPage() {
  return (
    <FirstPageContainer>
      <FillInfoSide>
        <Header>
          <ArrowDiv>
            <img src={arrow} alt="arrow" />
          </ArrowDiv>
          <Title>პირადი ინფო</Title>
          <PageNumber>1/3</PageNumber>
        </Header>
        <FormBox />
      </FillInfoSide>
      <ShowInfoSide></ShowInfoSide>
    </FirstPageContainer>
  );
}

const FirstPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;
const FillInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f9f9f9;
`;
const ShowInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
`;
const Header = styled.header`
  width: 80%;
  height: 88px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #1a1a1a;
`;
const ArrowDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #1a1a1a;
`;
const PageNumber = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #1a1a1a;
`;
