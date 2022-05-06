import styled from "styled-components";

function Comment() {
  return (
    <CommentWrapper>
      <div className="title">리뷰</div>
    </CommentWrapper>
  );
}

export default Comment;

const CommentWrapper = styled.div`
  padding-top: 50px;
  .title {
    padding-bottom: 10px;
    border-bottom: 2px solid #3d7873;
    color: #374a49;
    font-size: 19px;
    font-weight: 600;
  }
`;
