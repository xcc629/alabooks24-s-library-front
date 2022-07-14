import React from "react";

import styled from "styled-components";

function BookDetailInfo(prop) {
  return (
    <BookDetailInfoWrap>
      <div className="publishDate">
        <div className="title">출간 정보</div>
        <div className="value">{prop.publicationDate} 종이책 출간</div>
      </div>
      <div className="ISBN">
        <div className="title">ISBN</div>
        <div className="value">{prop.isbn}</div>
      </div>
    </BookDetailInfoWrap>
  );
}

export default BookDetailInfo;

const BookDetailInfoWrap = styled.section`
  display: flex;
  border: 0.3em solid rgba(209, 209, 209, 0.209);
  padding: 1.5rem;
  font-size: 12px;

  .publishDate,
  .ISBN {
    display: flex;
    padding-right: 8rem;
  }

  .title {
    padding-right: 0.8em;
    font-weight: 600;
    color: rgb(92, 92, 92);
  }

  .value {
    color: rgb(122, 122, 122);
  }
`;
