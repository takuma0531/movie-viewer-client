import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { Comment } from "@/typings/models/comment";

interface Props {
  comment: Comment;
}

export default function CommentRow({ comment }: Props) {
  const head = comment.user?.name?.charAt(0).toUpperCase() || "N";

  return (
    <CommentRowContainer>
      <div className="left">
        <div className="icon">
          <p>{head}</p>
        </div>
      </div>
      <div className="right">
        <div className="commentHeader">
          <div className="username">{comment.user?.name}</div>
          <div>Rating: {comment.rating?.point}</div>
        </div>
        <div className="comment">{comment.text}</div>
      </div>
    </CommentRowContainer>
  );
}

const CommentRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;

  .icon {
    border: 1px solid ${Colors.WHITE_GRAY};
    border-radius: 50%;
    background: ${Colors.LIGHT_BLUE};
    width: 30px;
    height: 30px;
    margin: 5px;

    p {
      color: ${Colors.WHITE};
      font-size: 1.2rem;
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .right {
    display: flex;
    flex-direction: column;

    .commentHeader {
      display: flex;
      margin-bottom: 15px;

      .username {
        margin-right: 10px;
      }
    }
  }
`;
