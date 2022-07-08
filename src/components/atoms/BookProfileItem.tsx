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

const Styled = styled.div`
  display: flex;
  border-bottom: 1px solid gray;
  margin: 0 15px;
  padding: 20px 0;
`;

const BookImgWrapper = styled.div`
  width: 80px;
  height: 112px;
`;

const BookImg = styled.img`
  width: 100%;
`;

const BookInfoWrapper = styled.div`
  padding-left: 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5em;
`;

const TitleWrapper = styled.div``;

const AuthorWrapper = styled.div`
  overflow-wrap: break-word;
  padding-top: 1px;
  padding-bottom: 1px;
  color: rgb(99, 108, 115);
`;

const StarWrapper = styled.div`
  display: flex;
  font-weight: bold;
  color: rgb(250, 114, 46);
  font-size: 13px;
`;

const CommentWrapper = styled.div`
  color: rgb(153, 153, 153);
  padding-top: 1px;
  margin: 0px 2px;
  font-weight: 400;
  font-size: 12px;
`;

const PublisherAndCategoryWrapper = styled.div`
  font-size: 12px;
  overflow-wrap: break-word;
  padding-top: 1px;
  padding-bottom: 1px;
  color: rgb(153, 153, 153);
`;

const Price = styled.div`
  padding: 1px 0px 5px;
  text-align: left;
  color: rgb(102, 102, 102);
  font-weight: normal;
  font-size: 13px;
  span {
    color: hsl(166, 41%, 51%);
    font-weight: bold;
  }
`;

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
        <BookImg src={bookImgUrl} alt={`${id}`} />
      </BookImgWrapper>
      <BookInfoWrapper>
        <TitleWrapper>{title}</TitleWrapper>
        <AuthorWrapper>{author}</AuthorWrapper>
        <StarWrapper>
          {star}점<CommentWrapper>({totalComment})</CommentWrapper>
        </StarWrapper>
        <PublisherAndCategoryWrapper>
          {publisher} | {category}
        </PublisherAndCategoryWrapper>
        <Price>
          소장 <span>{price}원</span>
        </Price>
      </BookInfoWrapper>
    </Styled>
  );
}
