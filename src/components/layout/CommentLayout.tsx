import * as React from "react";
import styled from "styled-components";
import CommentList from "../molocule/CommentList";
import CommentInputLayout from "./CommentInputLayout";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { useEffect, useState } from "react";
import { getComment } from "../../apis/comment";

export interface CommentLayoutProps extends BaseLayoutProps {
  bookId: number;
}

export default function CommentLayout({ bookId, ...rest }: CommentLayoutProps) {
  const [needGetPostList, setNeedGetPostList] = useState<boolean>(false);
  const [commentList, setCommentList] = useState({
    totalCount: 0,
    comments: [],
  });

  useEffect(() => {
    const getCommentList = async () => {
      let data = await getComment(bookId);
      setCommentList(data);
    };

    getCommentList();
  }, [bookId, needGetPostList]);

  return (
    <CommentLayoutStyled {...rest}>
      <CommentLayoutWrapper>리뷰</CommentLayoutWrapper>
      <CommentInputLayout
        bookId={bookId}
        setNeedGetPostList={setNeedGetPostList}
      />
      <CommentList commentList={commentList} />
    </CommentLayoutStyled>
  );
}
const CommentLayoutStyled = styled.div`
  padding-top: 50px;
`;

const CommentLayoutWrapper = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #3d7873;
  color: #374a49;
  font-size: 19px;
  font-weight: 600;
`;
