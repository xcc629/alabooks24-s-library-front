import * as React from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { BsFillChatFill, BsHandThumbsUpFill } from "react-icons/bs";
import { BaseLayoutProps } from "../types/BaseLayoutProps";
import { CommentsProps } from "../types/DataProps";
import { formateDate } from "../../utils/formatDate";

export interface CommentListProps extends BaseLayoutProps {
  commentList: {
    totalCount: number;
    comments: CommentsProps[];
  };
}

export interface ChildernCommentCardProps extends BaseLayoutProps {
  commentsItem: {
    childrenCount: CommentsProps["childrenCount"];
    commentId: CommentsProps["commentId"];
    content: CommentsProps["content"];
    like: CommentsProps["like"];
    star: CommentsProps["star"];
    writeDateTime: CommentsProps["writeDateTime"];
    writer: CommentsProps["writer"];
  };
}

export interface ChildernStarProps extends BaseLayoutProps {
  star: CommentsProps["star"];
}

const CommentListWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  span:first-child {
    font-weight: 600;
  }
`;

const CommentHeaderStyled = styled.div`
  border-bottom: 2px solid #a8bdbb;
  padding-bottom: 10px;
  color: #374a49;
  font-size: 16px;
`;

const CommentCardStyled = styled.div`
  display: flex;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${theme.borderColor};

  .comment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    font-size: 13px;
  }
`;

const CommentCardUserBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const CommentCardDataWrapper = styled.div`
  margin-top: 10px;
  width: max-content;
  font-size: 12px;
  color: #a8bdbb;
`;

const CommnetCardDataCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  font-size: 13px;
`;

const CommnetCardButtonWrapper = styled.div`
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
`;

const StarWrapper = styled.div<Pick<ChildernStarProps, "star">>`
  position: relative;
  margin-bottom: 10px;
  width: 60px;
  overflow: hidden;
`;

const BeStarImgWrapper = styled.img<Pick<ChildernStarProps, "star">>`
  position: absolute;
  width: 60px;
  left: ${(props) => props.star * 20}%;
  top: 0px;
  background-color: white;
  z-index: 10;
`;

const NoCommentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

function ChildernStar({ star, ...rest }: ChildernStarProps) {
  return (
    <StarWrapper star={star} {...rest}>
      <div>
        <img
          src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2050%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%23fa722e%22%3E%3Cpath%20d%3D%22M8.089,9.755L5,8.308L1.91,9.755l0.423-3.387L0,3.876l3.352-0.645L5,0.245l1.647,2.987L10,3.876L7.666,6.368L8.089,9.755z%20M28.09,9.755L25,8.308l-3.09,1.447l0.423-3.387L20,3.876l3.352-0.645L25,0.245l1.647,2.987L30,3.876l-2.334,2.492L28.09,9.755z%20M18.09,9.755L15,8.308l-3.09,1.447l0.423-3.387L10,3.876l3.352-0.645L15,0.245l1.647,2.987L20,3.876l-2.334,2.492L18.09,9.755z%20M38.09,9.755L35,8.308l-3.09,1.447l0.422-3.387L30,3.876l3.352-0.645L35,0.245l1.647,2.987L40,3.876l-2.334,2.492L38.09,9.755z%20M48.09,9.755L45,8.308l-3.09,1.447l0.422-3.387L40,3.876l3.352-0.645L45,0.245l1.647,2.987L50,3.876l-2.334,2.492L48.09,9.755z%22/%3E%3C/svg%3E"
          alt="fillStar"
        />
      </div>
      <BeStarImgWrapper
        src="data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2050%2010%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20fill%3D%22%23d1d5d9%22%3E%3Cpath%20d%3D%22M8.089,9.755L5,8.308L1.91,9.755l0.423-3.387L0,3.876l3.352-0.645L5,0.245l1.647,2.987L10,3.876L7.666,6.368L8.089,9.755z%20M28.09,9.755L25,8.308l-3.09,1.447l0.423-3.387L20,3.876l3.352-0.645L25,0.245l1.647,2.987L30,3.876l-2.334,2.492L28.09,9.755z%20M18.09,9.755L15,8.308l-3.09,1.447l0.423-3.387L10,3.876l3.352-0.645L15,0.245l1.647,2.987L20,3.876l-2.334,2.492L18.09,9.755z%20M38.09,9.755L35,8.308l-3.09,1.447l0.422-3.387L30,3.876l3.352-0.645L35,0.245l1.647,2.987L40,3.876l-2.334,2.492L38.09,9.755z%20M48.09,9.755L45,8.308l-3.09,1.447l0.422-3.387L40,3.876l3.352-0.645L45,0.245l1.647,2.987L50,3.876l-2.334,2.492L48.09,9.755z%22/%3E%3C/svg%3E"
        alt="beStar"
        star={star}
      />
    </StarWrapper>
  );
}

function ChildernCommentCard({
  commentsItem,
  ...rest
}: ChildernCommentCardProps) {
  const { content, like, star, writeDateTime, writer } = commentsItem;
  return (
    <CommentCardStyled {...rest}>
      <CommentCardUserBoxWrapper>
        <ChildernStar star={star} />
        {writer.slice(0, 3) + "***"}
        <CommentCardDataWrapper>
          {formateDate(writeDateTime)} • 신고
        </CommentCardDataWrapper>
      </CommentCardUserBoxWrapper>
      <CommnetCardDataCommentWrapper>
        {content}
        <CommnetCardButtonWrapper>
          <button>
            <BsFillChatFill />
            댓글
          </button>
          <button>
            <BsHandThumbsUpFill />
            {like}
          </button>
        </CommnetCardButtonWrapper>
      </CommnetCardDataCommentWrapper>
    </CommentCardStyled>
  );
}

export default function CommentList({
  commentList,
  ...rest
}: CommentListProps) {
  const { comments, totalCount } = commentList;

  return (
    <CommentListWrapper {...rest}>
      <CommentHeaderStyled>
        <span>전체</span>
        <span> {totalCount}</span>
      </CommentHeaderStyled>
      {totalCount ? (
        <div>
          {comments &&
            comments.map((data, index) => (
              <ChildernCommentCard key={index} commentsItem={data} />
            ))}
        </div>
      ) : (
        <NoCommentWrapper>
          아직 등록된 댓글이 없습니다. 첫 댓글 등록을 해주세요!
        </NoCommentWrapper>
      )}
    </CommentListWrapper>
  );
}
