import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BASE_URL from "../../config";
import SignNav from "../../components/SignNav/SignNav";
import GreenButton from "../../components/GreenButton/GreenButton";
import SignupForm from "../../components/SignupForm/SignupForm";
import "./Signup.scss";
import "../../components/SignupForm/SignupForm.module.css";
import { ImWarning } from "react-icons/im";

function Signup() {
  const navigate = useNavigate();
  const [signupValueObj, setsignupValueObj] = useState({
    loginId: "",
    password: "",
    passwordConfirm: "",
    emailAddress: "",
  });
  const [valueError, setvalueError] = useState({
    loginIdErrMessage: "",
    passwordErrMessage: "",
    passwordConfirmErrMessage: "",
    emailAddressErrMessage: "",
  });

  const goToLogin = () => {
    navigate("/login");
  };

  const totalValidation = () => {
    idValidation();
    passwordValidation();
    passwordConfirmValidation();
    emailAddressValidation();

    const {
      loginIdErrMessage,
      passwordErrMessage,
      passwordConfirmErrMessage,
      emailAddressErrMessage,
    } = valueError;

    const validationResult =
      !loginIdErrMessage.length &&
      !passwordErrMessage.length &&
      !passwordConfirmErrMessage.length &&
      !emailAddressErrMessage.length;

    return validationResult;
  };

  const idValidation = () => {
    const { loginId } = signupValueObj;
    const regId = /^[a-zA-Z0-9]{5,20}$/;
    if (loginId.length === 0) {
      setvalueError((prev) => {
        return {
          ...prev,
          loginIdErrMessage: "아이디를 입력해주세요",
        };
      });
      return;
    } else if (!regId.test(loginId)) {
      setvalueError((prev) => {
        return {
          ...prev,
          loginIdErrMessage: "아이디가 형식에 맞지 않습니다.",
        };
      });
      return;
    }
    setvalueError((prev) => {
      return {
        ...prev,
        loginIdErrMessage: "",
      };
    });
  };

  const passwordValidation = () => {
    const { password } = signupValueObj;
    const regPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

    if (password.length === 0) {
      setvalueError((prev) => {
        return { ...prev, passwordErrMessage: "비밀번호를 입력해주세요" };
      });
      return;
    } else if (!regPassword.test(password)) {
      setvalueError((prev) => {
        return {
          ...prev,
          passwordErrMessage:
            "8자 이상, 영문/숫자/특수문자 포함하여 입력해주세요.",
        };
      });
      return;
    }

    setvalueError((prev) => {
      return {
        ...prev,
        passwordErrMessage: "",
      };
    });
  };

  const passwordConfirmValidation = () => {
    const { password, passwordConfirm } = signupValueObj;
    if (passwordConfirm.length === 0) {
      setvalueError((prev) => {
        return {
          ...prev,
          passwordConfirmErrMessage: "비밀번호를 재입력해주세요",
        };
      });
      return;
    } else if (password !== passwordConfirm) {
      setvalueError((prev) => {
        return {
          ...prev,
          passwordConfirmErrMessage: "비밀번호가 일치하지 않습니다.",
        };
      });
      return;
    }
    setvalueError((prev) => {
      return {
        ...prev,
        passwordConfirmErrMessage: "",
      };
    });
  };

  const emailAddressValidation = () => {
    const { emailAddress } = signupValueObj;
    const regemailAddress = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(.)[a-zA-Z0-9]+$/;

    if (emailAddress.length === 0) {
      setvalueError((prev) => {
        return { ...prev, emailAddressErrMessage: "이메일을 입력해주세요" };
      });
      return;
    } else if (!regemailAddress.test(emailAddress)) {
      setvalueError((prev) => {
        return {
          ...prev,
          emailAddressErrMessage: "이메일 형식이 맞지 않습니다",
        };
      });
      return;
    }
    setvalueError((prev) => {
      return {
        ...prev,
        emailAddressErrMessage: "",
      };
    });
  };

  const onClick = () => {
    if (totalValidation()) {
      postHandler();
      goToLogin();
    }
  };

  const onKeyDownEnter = (e) => {
    const {
      loginIdErrMessage,
      passwordErrMessage,
      passwordConfirmErrMessage,
      emailAddressErrMessage,
    } = valueError;
    if (e.keyCode === 13) {
      totalValidation();
      if (
        !loginIdErrMessage.length &&
        !passwordErrMessage.length &&
        !passwordConfirmErrMessage.length &&
        !emailAddressErrMessage.length
      ) {
        postHandler();
        goToLogin();
      }
    }
  };

  const postHandler = () => {
    fetch(`${BASE_URL}/members/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupValueObj),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <style>{"body { background-color: rgb(238, 250, 243); }"}</style>
        </Helmet>
      </HelmetProvider>
      <SignNav />
      <section className="signupWap">
        <div className="signupIdWap">
          {datas.map((data) => {
            return (
              data.id === 1 && (
                <SignupForm
                  key={data.id}
                  name={"loginId"}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setsignupValueObj}
                  onKeyDownEnter={onKeyDownEnter}
                  onValidate={idValidation}
                  autoComplete={data.autoComplete}
                />
              )
            );
          })}
        </div>
        {valueError.loginIdErrMessage.length !== 0 && (
          <span className="warningUp">
            <ImWarning />
            {` ${valueError.loginIdErrMessage}`}
          </span>
        )}

        <div className="signupPasswordsWap">
          {datas.map((data) => {
            return (
              data.id === 2 && (
                <SignupForm
                  key={data.id}
                  name={"password"}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setsignupValueObj}
                  onKeyDownEnter={onKeyDownEnter}
                  onValidate={passwordValidation}
                  autoComplete={data.autoComplete}
                />
              )
            );
          })}
        </div>

        <div className="signupRePasswordsWap">
          {datas.map((data) => {
            return (
              data.id === 3 && (
                <SignupForm
                  key={data.id}
                  name={"passwordConfirm"}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setsignupValueObj}
                  onKeyDownEnter={onKeyDownEnter}
                  onValidate={passwordConfirmValidation}
                  autoComplete={data.autoComplete}
                />
              )
            );
          })}
        </div>
        {(valueError.passwordErrMessage ||
          valueError.passwordConfirmErrMessage) && (
          <span className="warningUp">
            <ImWarning />
            {` ${
              valueError.passwordErrMessage ||
              valueError.passwordConfirmErrMessage
            }`}
          </span>
        )}

        <div className="signupEmail">
          {datas.map((data) => {
            return (
              data.id === 4 && (
                <SignupForm
                  key={data.id}
                  name={"emailAddress"}
                  div={data.div}
                  after={data.after}
                  type={data.type}
                  setValue={setsignupValueObj}
                  onKeyDownEnter={onKeyDownEnter}
                  onValidate={emailAddressValidation}
                  autoComplete={data.autoComplete}
                />
              )
            );
          })}
        </div>
        {valueError.emailAddressErrMessage && (
          <span className="warningUp">
            <ImWarning />
            {` ${valueError.emailAddressErrMessage}`}
          </span>
        )}

        <GreenButton span={"회원 가입 완료"} onClick={onClick} />
      </section>
    </div>
  );
}

export default Signup;
const datas = [
  {
    id: 1,
    div: "아이디",
    after: "5~20자 영문, 숫자",
    type: "text",
    autoComplete: "on",
  },
  {
    id: 2,
    div: "비밀번호",
    after: "8자 이상, 영문/숫자/특수문자 포함하여 입력",
    type: "password",
    autoComplete: "off",
  },
  {
    id: 3,
    div: "비밀번호 확인",
    after: "비밀번호 재입력",
    type: "password",
    autoComplete: "off",
  },
  {
    id: 4,
    div: "이메일 주소",
    after: "이메일 주소 입력",
    type: "email",
    autoComplete: "on",
  },
];
