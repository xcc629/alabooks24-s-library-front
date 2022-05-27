import Moment from "react-moment";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { BsFillChatFill, BsHandThumbsUpFill } from "react-icons/bs";

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

function Comment(props) {
  const { commentList } = props;
  return (
    <CommentWrapper>
      <div className="title">리뷰</div>
      <CommentList commentList={commentList} />
    </CommentWrapper>
  );
}

function CommentList(props) {
  const { commentList } = props;
  const { comments, totalCount } = commentList;
  return (
    <CommentListWrapper>
      <div className="header">
        <span>전체</span>
        <span> {totalCount}</span>
      </div>
      <div className="commentWrapper">
        {comments &&
          comments.map((data, index) => (
            <CommentCard key={index} data={data} />
          ))}
      </div>
    </CommentListWrapper>
  );
}

function CommentCard(props) {
  const { data } = props;
  const {
    childerenCount,
    commentId,
    content,
    like,
    star,
    writeDateTime,
    writer,
  } = data;
  return (
    <CommentCardWrapper>
      <div className="userBox">
        <Star star={star} />
        {writer.slice(0, 3) + "***"}
        <div className="date">
          <Moment data={writeDateTime} format="YYYY.MM.DD" /> • 신고
        </div>
      </div>
      <div className="comment">
        {content}
        <div className="buttonWrapper">
          <button>
            <BsFillChatFill />
            댓글
          </button>
          <button>
            <BsHandThumbsUpFill />
            {like}
          </button>
        </div>
      </div>
    </CommentCardWrapper>
  );
}

function Star(props) {
  const { star } = props;
  return (
    <StarWrapper star={star}>
      <div className="fillStarWrapper">
        <img
          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2050%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%23fa722e%22%3E%3Cpath%20d%3D%22M8.089,9.755L5,8.308L1.91,9.755l0.423-3.387L0,3.876l3.352-0.645L5,0.245l1.647,2.987L10,3.876L7.666,6.368L8.089,9.755z%20M28.09,9.755L25,8.308l-3.09,1.447l0.423-3.387L20,3.876l3.352-0.645L25,0.245l1.647,2.987L30,3.876l-2.334,2.492L28.09,9.755z%20M18.09,9.755L15,8.308l-3.09,1.447l0.423-3.387L10,3.876l3.352-0.645L15,0.245l1.647,2.987L20,3.876l-2.334,2.492L18.09,9.755z%20M38.09,9.755L35,8.308l-3.09,1.447l0.422-3.387L30,3.876l3.352-0.645L35,0.245l1.647,2.987L40,3.876l-2.334,2.492L38.09,9.755z%20M48.09,9.755L45,8.308l-3.09,1.447l0.422-3.387L40,3.876l3.352-0.645L45,0.245l1.647,2.987L50,3.876l-2.334,2.492L48.09,9.755z%22/%3E%3C/svg%3E"
          alt="fillStar"
          className="fill"
        />
      </div>
      <img
        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2050%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%23d1d5d9%22%3E%3Cpath%20d%3D%22M8.089,9.755L5,8.308L1.91,9.755l0.423-3.387L0,3.876l3.352-0.645L5,0.245l1.647,2.987L10,3.876L7.666,6.368L8.089,9.755z%20M28.09,9.755L25,8.308l-3.09,1.447l0.423-3.387L20,3.876l3.352-0.645L25,0.245l1.647,2.987L30,3.876l-2.334,2.492L28.09,9.755z%20M18.09,9.755L15,8.308l-3.09,1.447l0.423-3.387L10,3.876l3.352-0.645L15,0.245l1.647,2.987L20,3.876l-2.334,2.492L18.09,9.755z%20M38.09,9.755L35,8.308l-3.09,1.447l0.422-3.387L30,3.876l3.352-0.645L35,0.245l1.647,2.987L40,3.876l-2.334,2.492L38.09,9.755z%20M48.09,9.755L45,8.308l-3.09,1.447l0.422-3.387L40,3.876l3.352-0.645L45,0.245l1.647,2.987L50,3.876l-2.334,2.492L48.09,9.755z%22/%3E%3C/svg%3E"
        alt="beStar"
        className="be"
      />
    </StarWrapper>
  );
}

export default Comment;
