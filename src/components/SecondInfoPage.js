import styled from "styled-components";
import arrow from "../images/Vector.png";
import { useState } from "react";
import FillInfo from "./FillInfo";

export default function SecondInfoPage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  return isArrowClicked ? (
    <FillInfo
      isSubmitted={props.isSubmitted}
      handleSubmit={props.handleSubmit}
      name={props.name}
      lastName={props.lastName}
      email={props.email}
      number={props.number}
      onSubmit={props.onSubmit}
      handleChange={props.handleChange}
      arrowDivClicked={props.arrowDivClicked}
      registerName={props.registerName}
      registerLastName={props.registerLastName}
      registerImage={props.registerImage}
      registerAboutMe={props.registerAboutMe}
      registerEmail={props.registerEmail}
      registerNumber={props.registerNumber}
    />
  ) : (
    <FillInfoSide>
      <HeaderBox>
        <ArrowDiv onClick={() => setIsArrowClicked(true)}>
          <img src={arrow} alt="arrow" />
        </ArrowDiv>
        <Title>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</Title>
        <PageNumber>2/3</PageNumber>
      </HeaderBox>
    </FillInfoSide>
  );
  // isArrowClicked ? (
  //   <FirstInfoPage />
  // ) : (

  // );
}
const FillInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f9f9f9;
`;
const HeaderBox = styled.header`
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
