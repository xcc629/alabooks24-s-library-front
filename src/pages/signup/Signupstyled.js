import styled from "styled-components";

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto;
  width: 400px;
  * {
    letter-spacing: -0.04em;
    cursor: pointer;
  }

  .signupPasswordsWap {
    display: flex;
    flex-direction: column;
  }
  .warningUp {
    align-items: center;
    padding-left: 10px;
    margin-bottom: 20px;
    color: rgba(233, 49, 49, 0.685);
    font-size: 15px;
  }
`;

export { SignupWrapper };
