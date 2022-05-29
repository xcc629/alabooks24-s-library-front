import { useEffect, useState } from "react";
import styled from "styled-components";
import { postComment } from "../../apis/comment";
import TextButton from "../atomic/TextButton";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import CommentStarInput from "./CommentStarInput";
import { checkLogin } from "../../utils/account";

export interface CommentInputProps extends BaseLayoutProps {
  bookId: number;
}

export interface StyledProps {
  disable: boolean;
}

const CommentInputStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #999;
  font-weight: 600;
  padding-top: 50px;
  padding-bottom: 10px;
  letter-spacing: -0.03em;
`;

const StarRatingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px auto 30px auto;
  width: 350px;
`;

const InputWrapper = styled.textarea`
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  resize: none;
`;

const PostButtonWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: row-reverse;
  opacity: ${({ disable }) => (disable ? 0.5 : 1)};
`;

export default function CommentInput({ bookId, ...rest }: CommentInputProps) {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(checkLogin()));
  const [commentValue, setcommentValue] = useState<string>("");
  const [starValue, setStarValue] = useState<number>(0);

  useEffect(() => {
    setIsLogin(Boolean(checkLogin()));
  }, []);

  const blockInput = () => {
    if (!isLogin) {
      alert("로그인 후 이용해주세요");
    }
  };

  const saveInputValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setcommentValue(e.target.value);
  };

  const clickPostComment = () => {
    let comment = {
      star: starValue,
      content: commentValue,
    };
    postComment(bookId, comment).then((res) => console.log(res));
  };

  return (
    <CommentInputStyled {...rest} onClick={blockInput}>
      <TitleWrapper>이 책을 평가해주세요!</TitleWrapper>
      <StarRatingWrapper>
        <CommentStarInput setStarValue={setStarValue} isLogin={isLogin} />
      </StarRatingWrapper>
      <InputWrapper
        onChange={(e) => {
          saveInputValue(e);
        }}
        disabled={!isLogin}
        placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
      />
      <PostButtonWrapper disable={commentValue.length >= 5 ? false : true}>
        <TextButton
          themeColor={"Green"}
          content={"리뷰 남기기"}
          fontSize={"12px"}
          padding={"8px 18px"}
          disabled={commentValue.length >= 5 ? false : true}
          onClick={clickPostComment}
        />
      </PostButtonWrapper>
    </CommentInputStyled>
  );
}
