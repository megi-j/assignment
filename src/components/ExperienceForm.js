import styled from "styled-components";
import FormInsideBox from "./FormInsideBox";

export default function ExperienceForm(props) {
  return (
    <Form onSubmit={props.handleSubmit(props.onSubmit)}>
      <FormInsideBox
        position={props.position}
        registerPosition={props.registerPosition}
        employer={props.employer}
        registerEmployer={props.registerEmployer}
        startDate={props.startDate}
        registerStartDate={props.registerStartDate}
        dueDate={props.dueDate}
        registerDueDate={props.registerDueDate}
        description={props.description}
        registerDescription={props.registerDescription}
        showExperience={props.showExperience}
        showSecondPageResult={props.showSecondPageResult}
      />
      {/* {props.isSecondPageSubmit &&
        props.data.map((item) => {
          return (
            <FormInsideBox
            
            />
          );
        })} */}
      {/* {props.isMoreExperienceButtonClicked && (
        <FormInsideBox
          position={props.position2}
          registerPosition={props.registerPosition2}
          employer={props.employer2}
          registerEmployer={props.registerEmployer2}
          startDate={props.startDate2}
          registerStartDate={props.registerStartDate2}
          dueDate={props.dueDate2}
          registerDueDate={props.registerDueDate2}
          description={props.description2}
          registerDescription={props.registerDescription2}
        />
      )} */}
      <MoreExperienceButton
      // type="submit"
      // onClick={props.more}
      // onClick={props.handleSubmit(props.onSubmit2)}
      >
        მეტი გამოცდილების დამატება
      </MoreExperienceButton>
      <ButtonBox>
        <BackButton onClick={props.backClicked}>ᲣᲙᲐᲜ</BackButton>
        <SubmitButton type="submit" onClick={props.nextButtonClicked}>
          ᲨᲔᲛᲓᲔᲒᲘ
        </SubmitButton>
      </ButtonBox>
    </Form>
  );
}
const SubmitButton = styled.button`
  width: 151px;
  height: 48px;
  background-color: #6b40e3;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;
const BackButton = styled.button`
  width: 113px;
  height: 48px;
  background: #6b40e3;
  border-radius: 4px;
  color: #fff;
  border: none;
`;
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const MoreExperienceButton = styled.button`
  background: #62a1eb;
  border-radius: 4px;
  border: none;
  color: #fff;
  width: 289px;
  height: 48px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 45px;
  margin-bottom: 100px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 80%;
  margin: 0 auto;
  height: 80%;
  margin: 77px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
`;
