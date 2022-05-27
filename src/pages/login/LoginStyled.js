import styled from "styled-components";
import { theme } from "../../styles/theme";

const LoginMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto;
  width: 400px;

  * {
    letter-spacing: -0.04em;
    cursor: pointer;
  }
  .loginForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    input {
      border: 1px solid ${theme.themeColor};
      padding: 16px 20px;
      font-size: 15px;
    }
    input[type="password"] {
      width: 100%;
      border-top: 0.5px;
    }
    input[type="text"] {
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
    }
    input:hover {
      border: 1px solid rgba(92, 92, 92, 0.609);
      box-shadow: inset 0px 0px 5px 1px rgba(202, 202, 202, 0.287);
    }
    input:focus {
      outline: none;
      border: 1px solid rgb(0, 100, 0);
    }

    .loginOptionBox {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border: 1px solid $border-color;
      border-bottom-right-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: rgb(212, 247, 225);
      color: rgb(100, 128, 116);
      font-size: 12px;

      label {
        display: flex;
        align-items: center;
        input[type="checkbox"] {
          margin-right: 5px;
          width: 20px;
          height: 20px;
        }
        span:hover {
          color: ${theme.themeColor};
        }
      }
      span {
        padding-right: 7px;
      }
      span + span {
        padding-left: 7px;
        border-left: 1px solid rgb(161, 202, 179);
      }
      span:hover {
        color: ${theme.themeColor};
      }
    }
  }
  .button {
    margin-bottom: 10px;
    border: 1px solid rgb(161, 202, 179);
    border-radius: 4px;
    padding: 16px 20px;
    background-color: hsl(166, 41%, 51%);
    color: white;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.04em;
    cursor: pointer;
  }

  .signupButton {
    padding: 16px 20px;
    border: 1px solid ${theme.themeColor};
    border-radius: 4px;
    background-color: white;
    color: rgb(148, 148, 148);
    font-weight: 600;
    font-size: 16px;
  }
`;

const WarningUp = styled.span`
  align-items: center;
  padding-left: 10px;
  margin-bottom: 20px;
  color: rgba(233, 49, 49, 0.685);
  font-size: 15px;
`;

export { LoginMain, WarningUp };
