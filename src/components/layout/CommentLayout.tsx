import * as React from "react";
import styled from "styled-components";
import CommentList from "../molocule/CommentList";
import CommentInput from "../molocule/CommentInput";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { CommentsProps } from "../types/DataProps";

export interface CommentLayoutProps extends BaseLayoutProps {
  bookId: number;
  commentList: { totalCount: number; comments: CommentsProps[] };
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

export default function CommentLayout({
  bookId,
  commentList,
  ...rest
}: CommentLayoutProps) {
  return (
    <CommentLayoutStyled {...rest}>
      <CommentLayoutWrapper>리뷰</CommentLayoutWrapper>
      <CommentInput bookId={bookId} />
      <CommentList commentList={commentList} />
    </CommentLayoutStyled>
  );
}
