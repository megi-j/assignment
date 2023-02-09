import styled from "styled-components";
import FormBox from "./FormBox";
import arrow from "../images/Vector.png";
import SecondInfoPage from "./SecondInfoPage";

export default function FillInfoFirstPage(props) {
  return (
    // props.isSubmitted ? (
    //   <SecondInfoPage />
    // ) : (
    <FillInfoSide>
      <Header>
        <ArrowDiv onClick={props.arrowDivClicked}>
          <img src={arrow} alt="arrow" />
        </ArrowDiv>
        <Title>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</Title>
        <PageNumber>1/3</PageNumber>
      </Header>
      <FormBox
        handleSubmit={props.handleSubmit}
        name={props.name}
        lastName={props.lastName}
        email={props.email}
        number={props.number}
        onSubmit={props.onSubmit}
        registerName={props.registerName}
        registerLastName={props.registerLastName}
        registerImage={props.registerImage}
        registerAboutMe={props.registerAboutMe}
        registerEmail={props.registerEmail}
        registerNumber={props.registerNumber}
        handleChange={props.handleChange}
        onFocusEmail={props.onFocusEmail}
        onFocusTel={props.onFocusTel}
        onInput={props.onInput}
        isSubmittedFirstPage={props.isSubmittedFirstPage}
      />
    </FillInfoSide>
  );
}

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
const FillInfoSide = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid green;
`;
