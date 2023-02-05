import styled from "styled-components";
import arrow from "../images/Vector.png";
import FormBox from "./FormBox";
import { useForm, SubmitHandler } from "react-hook-form";
import email from "../images/email.png";
import phone from "../images/phone.png";
import { useState } from "react";

export default function FirstInfoPage() {
  const [image, setImage] = useState(null);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // setIsSubmitClicked(true);
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
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
        <FormBox
          handleSubmit={handleSubmit}
          name={errors.name}
          lastName={errors.lastName}
          email={errors.email}
          number={errors.number}
          onSubmit={onSubmit}
          registerName={register("name", { required: true })}
          registerLastName={register("lastName", { required: true })}
          registerImage={register("image", { required: true })}
          registerAboutMe={register("aboutMe")}
          registerEmail={register("email", { required: true })}
          registerNumber={register("number", { required: true })}
          handleChange={handleChange}
        />
      </FillInfoSide>
      <ShowInfoSide>
        <Name>{errors.name ? " " : watch("name")}</Name>
        <Name>{errors.lastName ? "" : watch("lastName")}</Name>
        <Box>
          {errors.email ? " " : <img src={email} alt="" />}
          <EmailAndPhone>{errors.email ? " " : watch("email")}</EmailAndPhone>
        </Box>
        <Box>
          {errors.number ? "" : <img src={phone} />}
          <EmailAndPhone>{errors.phone ? "" : watch("number")}</EmailAndPhone>
        </Box>
        {image && (
          <img style={{ width: 100 }} src={URL.createObjectURL(image)} />
        )}
        <div>{watch("aboutMe")}</div>
      </ShowInfoSide>
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
const Name = styled.h1`
  font-weight: 700;
  font-size: 34px;
  color: #f93b1d;
`;
const Box = styled.div`
  display: flex;
`;
const EmailAndPhone = styled.p`
  font-weight: 400;
  font-size: 18px;
  color: #1a1a1a;
`;
