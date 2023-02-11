import styled from "styled-components";
import arrow from "../images/arrow.png";
import { useContext, useState } from "react";
import App from "../App";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useForm, SubmitHandler } from "react-hook-form";
import ExperienceForm from "./ExperienceForm";
import FirstInfoPage from "./FirstInfoPage";
import smallLogo from "../images/logo-3.png";
import ThirdInfoPage from "./ThirdInfoPage";

export default function SecondInfoPage(props) {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isMoreExperienceButtonClicked, setIsMoreExperienceButtonClicked] =
    useState(false);
  const [isSecondPageSubmit, setIsSecondPageSubmit] = useState(false);
  const [secondPageInfo, setSecondPageInfo] = useState();
  const [showExperience, setShowExperience] = useState(false);
  const [showSecondPageResult, setSecondPageResult] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSecondPageInfo(data);
    setIsSecondPageSubmit(true);
  };
  // const handleButtonClick = (event) => {
  //   event.preventDefault();
  //   setIsMoreExperienceButtonClicked(true);
  // };
  const backClicked = (e) => {
    e.preventDefault();
    setIsBackClicked(true);
  };

  return (
    <>
      {isArrowClicked ? (
        <App />
      ) : isBackClicked ? (
        <FirstInfoPage />
      ) : isSecondPageSubmit ? (
        <ThirdInfoPage
          inputName={props.inputName}
          inputLastName={props.inputLastName}
          email={props.email}
          inputEmail={props.inputEmail}
          number={props.number}
          inputNumber={props.inputNumber}
          inputAboutMe={props.inputAboutMe}
          image={props.image}
          position={secondPageInfo.position}
          employer={secondPageInfo.employer}
          startDate={secondPageInfo.startDate}
          endDate={secondPageInfo.endDate}
          description={secondPageInfo.description}
          position2={secondPageInfo.position2}
          employer2={secondPageInfo.employer2}
          startDate2={secondPageInfo.startDate2}
          endDate2={secondPageInfo.employer2}
          description2={secondPageInfo.description2}
        />
      ) : (
        <SecondPageContainer>
          <FillInfoExperienceSide>
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
              backClicked={backClicked}
              position={errors.position}
              employer={errors.employer}
              startDate={errors.startDate}
              endDate={errors.endDate}
              description={errors.description}
              position2={errors.position2}
              registerPosition2={register("position2", {
                required: true,
                minLength: 2,
              })}
              employer2={errors.employer2}
              registerEmployer2={register("employer2", {
                required: true,
                minLength: 2,
              })}
              startDate2={errors.startDate2}
              registerStartDate2={register("startDate2", { required: true })}
              endDate2={errors.endDate2}
              registerEndDate2={register("endDate2", { required: true })}
              description2={errors.description2}
              registerDescription2={register("description2", {
                required: true,
              })}
              isMoreExperienceButtonClicked={isMoreExperienceButtonClicked}
              handleButtonClick={() => setIsMoreExperienceButtonClicked(true)}
              showExperience={() => setShowExperience(true)}
              showSecondPageResult={() => setSecondPageResult(true)}
            />
          </FillInfoExperienceSide>

          <ShowInfoSide>
            <FirstPageResult>
              <TextSide>
                <Name>
                  {props.inputName}&nbsp;
                  {props.inputLastName}
                </Name>

                <Box>
                  {props.email ? " " : <img src={email} alt="" />}
                  <EmailAndPhone>{props.inputEmail}</EmailAndPhone>
                </Box>
                <Box>
                  {" "}
                  {props.number ? "" : <img src={phone} />}
                  <EmailAndPhone>{props.inputNumber}</EmailAndPhone>
                </Box>
                <AboutMeBox>
                  {props.inputAboutMe === "" ? (
                    " "
                  ) : (
                    <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>
                  )}
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

            <SecondPageResult
              style={{ display: showSecondPageResult ? "block" : "none" }}
            >
              <ExperienceTitle
                style={{ display: showExperience ? "block" : "none" }}
              >
                ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ
              </ExperienceTitle>
              <ExperienceBox>
                <PositionText>
                  {errors.position ? " " : watch("position")}
                  {errors.employer ? " " : watch("employer")}
                </PositionText>
                <StartAndEndDate>
                  {errors.startDate ? " " : watch("startDate")}&nbsp;- &nbsp;
                  {errors.endDate ? " " : watch("endDate")}
                </StartAndEndDate>
                <p>{errors.description ? " " : watch("description")}</p>
              </ExperienceBox>

              {isMoreExperienceButtonClicked && (
                <ExperienceBox>
                  <PositionText>
                    {errors.position2 ? " " : watch("position2")}{" "}
                    {errors.employer2 ? " " : watch("employer2")}
                  </PositionText>
                  <StartAndEndDate>
                    {errors.startDate2 ? " " : watch("startDate2")}&nbsp;-
                    &nbsp;
                    {errors.endDate2 ? " " : watch("endDate2")}
                  </StartAndEndDate>
                  <p>{errors.description2 ? " " : watch("description2")}</p>
                </ExperienceBox>
              )}
            </SecondPageResult>
            <img
              style={{
                padding: 42,
              }}
              src={smallLogo}
              alt=""
            />
          </ShowInfoSide>
        </SecondPageContainer>
      )}
    </>
  );
}

const ExperienceBox = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #c8c8c8;
  margin-bottom: 20px;
`;
const SecondPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  overflow-y: scroll;
`;
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
  height: 20%;
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
`;
const ShowInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 48px 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  align-items: flex-start;
`;
const FillInfoExperienceSide = styled.div`
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
