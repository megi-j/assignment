import styled from "styled-components";
import FormBox from "./FormBox";
import arrow from "../images/arrow.png";

export default function FillInfoFirstPage(props) {
  return (
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
        surname={props.surname}
        email={props.email}
        phoneNumber={props.phoneNumber}
        onSubmit={props.onSubmit}
        registerName={props.registerName}
        registerSurname={props.registerSurname}
        registerImage={props.registerImage}
        registerAboutMe={props.registerAboutMe}
        registerEmail={props.registerEmail}
        registerPhoneNumber={props.registerPhoneNumber}
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
  // display: flex;
  // flex-direction: column;
  // justify-content: space-between;
  // align-content: space-between;
`;
