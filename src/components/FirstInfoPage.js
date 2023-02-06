import styled from "styled-components";

import { useForm, SubmitHandler } from "react-hook-form";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useState } from "react";
import App from "../App";
import SecondInfoPage from "./SecondInfoPage";

import FillInfo from "./FillInfo";

export default function FirstInfoPage() {
  const [image, setImage] = useState(null);
  const [isArrowDivClicked, setIsArrowDivClicked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      {isArrowDivClicked ? (
        <App />
      ) : (
        <FirstPageContainer>
          {isSubmitted ? (
            <SecondInfoPage
              arrowClicked={() => setIsArrowDivClicked(true)}
              handleSubmit={handleSubmit}
              name={errors.name}
              lastName={errors.lastName}
              email={errors.email}
              number={errors.number}
              onSubmit={onSubmit}
              handleChange={handleChange}
              arrowDivClicked={() => setIsArrowDivClicked(true)}
              registerName={register("name", { required: true })}
              registerLastName={register("lastName", { required: true })}
              registerImage={register("image", { required: true })}
              registerAboutMe={register("aboutMe")}
              registerEmail={register("email", { required: true })}
              registerNumber={register("number", { required: true })}
            />
          ) : (
            <FillInfo
              isSubmitted={isSubmitted}
              handleSubmit={handleSubmit}
              name={errors.name}
              lastName={errors.lastName}
              email={errors.email}
              number={errors.number}
              onSubmit={onSubmit}
              handleChange={handleChange}
              arrowDivClicked={() => setIsArrowDivClicked(true)}
              registerName={register("name", { required: true })}
              registerLastName={register("lastName", { required: true })}
              registerImage={register("image", { required: true })}
              registerAboutMe={register("aboutMe")}
              registerEmail={register("email", { required: true })}
              registerNumber={register("number", { required: true })}
            />
            // <FillInfoSide>
            //   <Header>
            //     <ArrowDiv onClick={() => setIsArrowDivClicked(true)}>
            //       <img src={arrow} alt="arrow" />
            //     </ArrowDiv>
            //     <Title>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</Title>
            //     <PageNumber>1/3</PageNumber>
            //   </Header>
            //   <FormBox
            //     handleSubmit={handleSubmit}
            //     name={errors.name}
            //     lastName={errors.lastName}
            //     email={errors.email}
            //     number={errors.number}
            //     onSubmit={onSubmit}
            //     registerName={register("name", { required: true })}
            //     registerLastName={register("lastName", { required: true })}
            //     registerImage={register("image", { required: true })}
            //     registerAboutMe={register("aboutMe")}
            //     registerEmail={register("email", { required: true })}
            //     registerNumber={register("number", { required: true })}
            //     handleChange={handleChange}
            //   />
            // </FillInfoSide>
          )}
          <ShowInfoSide>
            <FirstPageResult>
              <TextSide>
                <Name>
                  {errors.name ? " " : watch("name")}{" "}
                  {errors.lastName ? " " : watch("lastName")}
                </Name>
                {/* <Name>{errors.lastName ? " " : watch("lastName")}</Name> */}
                <Box>
                  {errors.email ? " " : <img src={email} alt="" />}
                  <EmailAndPhone>
                    {errors.email ? " " : watch("email")}
                  </EmailAndPhone>
                </Box>
                <Box>
                  {errors.number ? "" : <img src={phone} />}
                  <EmailAndPhone>
                    {errors.phone ? "" : watch("number")}
                  </EmailAndPhone>
                </Box>
                <AboutMeBox>
                  <AboutMeTitle>ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</AboutMeTitle>
                  {watch("aboutMe")}
                </AboutMeBox>
              </TextSide>
              {image && (
                <img
                  style={{ width: 246, height: 246, borderRadius: "50%" }}
                  src={URL.createObjectURL(image)}
                />
              )}
            </FirstPageResult>
          </ShowInfoSide>
        </FirstPageContainer>
      )}
    </>
  );
}
// const Header = styled.header`
//   width: 80%;
//   height: 88px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid #1a1a1a;
// `;
// const ArrowDiv = styled.div`
//   width: 40px;
//   height: 40px;
//   background-color: #fff;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Title = styled.h2`
//   font-weight: 700;
//   font-size: 24px;
//   color: #1a1a1a;
// `;
// const PageNumber = styled.p`
//   font-weight: 400;
//   font-size: 20px;
//   color: #1a1a1a;
// `;
const FirstPageContainer = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
`;
// const FillInfoSide = styled.div`
//   width: 50%;
//   height: 100%;
//   background-color: #f9f9f9;
// `;
const ShowInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  padding: 48px 80px;
`;

const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
  display: inline-block;
`;
const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
`;
const FirstPageResult = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c8c8c8;
`;

const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
