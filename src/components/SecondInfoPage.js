import styled from "styled-components";
import arrow from "../images/Vector.png";
import { useState } from "react";
import App from "../App";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useForm, SubmitHandler } from "react-hook-form";
import ExperienceForm from "./ExperienceForm";
import FirstInfoPage from "./FirstInfoPage";

export default function SecondInfoPage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setInfo(data);
    // setIsSubmitted(true);
  };

  return isArrowClicked ? (
    <App />
  ) : isBackClicked ? (
    <FirstInfoPage />
  ) : (
    <>
      <FillInfoSide>
        <HeaderBox>
          <ArrowDiv onClick={() => setIsArrowClicked(true)}>
            <img src={arrow} alt="arrow" />
          </ArrowDiv>
          <Title>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</Title>
          <PageNumber>2/3</PageNumber>
        </HeaderBox>
        <ExperienceForm
          registerPosition={register("position", {
            required: true,
            minLength: 2,
          })}
          registerEmployer={register("employer", {
            required: true,
            minLength: 2,
          })}
          registerStartDate={register("startDate", { required: true })}
          registerEndDate={register("endDate", { required: true })}
          registerDescription={register("description", { required: true })}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          backClicked={() => setIsBackClicked(true)}
        />
      </FillInfoSide>

      <ShowInfoSide>
        <FirstPageResult>
          <TextSide>
            <Name>
              {props.inputName}
              {props.inputLastName}
            </Name>
            {/* <Name>{errors.lastName ? " " : watch("lastName")}</Name> */}
            <Box>
              {props.email ? " " : <img src={email} alt="" />}
              <EmailAndPhone>{props.inputEmail}</EmailAndPhone>
            </Box>
            <Box>
              {props.number ? "" : <img src={phone} />}
              <EmailAndPhone>{props.inputNumber}</EmailAndPhone>
            </Box>
            <AboutMeBox>
              <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>
              {props.inputAboutMe}
            </AboutMeBox>
          </TextSide>
          {props.image && (
            <img
              style={{ width: 246, height: 246, borderRadius: "50%" }}
              src={URL.createObjectURL(props.image)}
            />
          )}
        </FirstPageResult>

        <SecondPageResult>
          <ExperienceTitle>ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</ExperienceTitle>
          <PositionText>
            {errors.position ? " " : watch("position")}{" "}
            {errors.employer ? " " : watch("employer")}
          </PositionText>
          <StartAndEndDate>
            {errors.startDate ? " " : watch("startDate")} -{" "}
            {errors.endDate ? " " : watch("endDate")}
          </StartAndEndDate>
          <p>{errors.description ? " " : watch("description")}</p>
        </SecondPageResult>
      </ShowInfoSide>
    </>
  );
}
const StartAndEndDate = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: #919191;
`;
const PositionText = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #1a1a1a;
`;
const ExperienceTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
`;
const AboutMeBox = styled.div`
  width: 550px;
  height: 120px;
  overflow: auto;
`;
const AboutMeTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  color: #f93b1d;
  margin-bottom: 15px;
`;

const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
`;
const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
  display: inline-block;
`;
const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const FirstPageResult = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;
const SecondPageResult = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: 1px solid #c8c8c8;
`;
const ShowInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 48px 80px;
`;
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
