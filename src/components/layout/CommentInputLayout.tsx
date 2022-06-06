import { useEffect, useState } from "react";
import styled from "styled-components";
import { postComment } from "../../apis/comment";
import TextButton from "../atomic/TextButton";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import CommentStarInput from "../molocule/CommentInputStar";
import { checkLogin } from "../../utils/account";
import CommentInputTitle from "../molocule/CommentInputTitle";

export interface CommentInputProps extends BaseLayoutProps {
  bookId: number;
  setNeedGetPostList: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StyledProps {
  disable: boolean;
}

export default function CommentInput({
  bookId,
  setNeedGetPostList,
  ...rest
}: CommentInputProps) {
  const [isLogin, setIsLogin] = useState<boolean>(Boolean(checkLogin()));
  const [isStarClicked, setisStarClicked] = useState<boolean>(false);
  const [starNumberForSign, setStarNumberForSign] = useState<number>(0);
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

  const clickPostComment = async () => {
    let comment = {
      star: starValue,
      content: commentValue,
    };
    let res = await postComment(bookId, comment);
    let message = await res.json();
    if (!res.ok) throw message;
    if (res.ok) {
      setcommentValue("");
      setNeedGetPostList(true);
    }
  };

  return (
    <CommentInputStyled {...rest} onClick={blockInput}>
      <CommentInputTitle
        starValue={starValue}
        starNumberForSign={starNumberForSign}
        isStarClicked={isStarClicked}
      />
      <StarRatingWrapper>
        <CommentStarInput
          setStarValue={setStarValue}
          setStarNumberForSign={setStarNumberForSign}
          setisStarClicked={setisStarClicked}
          isLogin={isLogin}
          isStarClicked={isStarClicked}
        />
      </StarRatingWrapper>
      <CommentTextInputWrapper
        value={commentValue}
        onChange={(e) => {
          saveInputValue(e);
        }}
        placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하시면 비공개될 수 있습니다."
      />
      <PostButtonWrapper
        disable={commentValue.length >= 5 ? false : true}
        onClick={clickPostComment}
      >
        <TextButton
          themeColor={"Green"}
          content={"리뷰 남기기"}
          fontSize={"12px"}
          padding={"8px 18px"}
        />
      </PostButtonWrapper>
    </CommentInputStyled>
  );
}

const CommentInputStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarRatingWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px auto 30px auto;
  width: 350px;
`;

const CommentTextInputWrapper = styled.textarea`
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
