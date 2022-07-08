import * as React from "react";
import styled from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface BookProfileProps extends BaseLayoutProps {
  id: number;
  bookImgUrl: string;
  title: string;
  author: string;
  star: number;
  totalComment: number;
  publisher: string;
  category: string;
  price: number;
}

export default function BookProfile({
  id,
  bookImgUrl,
  title,
  author,
  star,
  totalComment,
  publisher,
  category,
  price,
  ...rest
}: BookProfileProps) {
  return (
    <Styled {...rest}>
      <BookImgWrapper>
        <img src={bookImgUrl} alt={`${id}`} />
      </BookImgWrapper>
      <BookInfoWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
        <StarWrapper>
          {star}
          <CommentWrapper>{totalComment}</CommentWrapper>
        </StarWrapper>
        <PublisherAndCategoryWrapper></PublisherAndCategoryWrapper>
        <Price>소장 {price}원</Price>
      </BookInfoWrapper>
    </Styled>
  );
}

const Styled = styled.div``;

const BookImgWrapper = styled.div``;

const BookInfoWrapper = styled.div``;

const TitleWrapper = styled.div``;

const AuthorWrapper = styled.div``;

const StarWrapper = styled.div``;

const CommentWrapper = styled.div``;

const PublisherAndCategoryWrapper = styled.div``;

const Price = styled.div``;
