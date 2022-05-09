import styled from "styled-components";
import { theme } from "../../styles/theme";

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

const CommentListWrapper = styled.div`
  padding-top: 20px;

  .header {
    border-bottom: 2px solid #a8bdbb;
    padding-bottom: 10px;
    color: #374a49;
    font-size: 16px;

    span:first-child {
      font-weight: 600;
    }
  }
  .commentWrapper {
  }
`;

const CommentCardWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.borderColor};
  .userBox {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }
  .date {
    margin-top: 10px;
    width: max-content;
    font-size: 12px;
    color: #a8bdbb;
  }
  .comment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 13px;
    .buttonWrapper {
      display: flex;
      justify-content: end;
      button {
        display: flex;
        align-items: center;
        padding: 2px 5px;
        border: 2px solid ${theme.borderColor};
        border-radius: 5px;
        font-size: small;
        color: #808991;
        background-color: white;

        * {
          margin: 2px 4px 2px 2px;
        }
      }
      button:first-child {
        margin-right: 5px;
      }
    }
  }
`;

const StarWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  width: 60px;
  overflow: hidden;
  .fillStarWrapper {
    .fill {
    }
  }

  .be {
    position: absolute;
    width: 60px;
    left: ${(props) => props.star * 20}%;
    top: 0px;
    background-color: white;
    z-index: 10;
  }
`;

export { CommentWrapper, CommentListWrapper, CommentCardWrapper, StarWrapper };
