import * as React from "react";
import styled from "styled-components";
import { BaseLayoutProps } from "../types/BaseLayoutProps";

export interface AuthorProfileProps extends BaseLayoutProps {
  authorName: string;
  mainBookName: string;
  bookCount?: number;
}

export default function AuthorProfile({
  authorName,
  mainBookName,
  bookCount,
  ...rest
}: AuthorProfileProps) {
  return (
    <Styled {...rest}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="rgb(209, 213, 217)"
      >
        <defs>
          <clipPath id="circular-border">
            <circle cx="11" cy="12" r="6.5" />
          </clipPath>
        </defs>

        <circle cx="11" cy="11" r="11" fill="#eeeeee" />
        <circle cx="11" cy="8" r="3" />
        <circle cx="11" cy="19" r="7" clipPath="url(#circular-border)" />
      </svg>
      <Name>{authorName}</Name>
      <Book>
        {bookCount
          ? `<${mainBookName}> 외 ${bookCount}권`
          : `<${mainBookName}>`}
      </Book>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  height: max-content;
  padding: 12px 16px;
`;

const Name = styled.div`
  margin: 0 5px;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.4em;
`;

const Book = styled.div`
  font-size: 14px;
  color: rgb(128, 137, 145);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -moz-box-orient: vertical;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: keep-all;
  max-height: calc(1.2em);
  line-height: 1.2em;
`;
