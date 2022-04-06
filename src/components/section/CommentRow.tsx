import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";

export default function CommentRow() {
  return (
    <CommentRowContainer>
      <div className="left">
        <div className="icon"></div>
      </div>
      <div className="right">
        <div className="commentHeader">
          <div className="username">username</div>
          <div>Rating: 0</div>
        </div>
        <div className="comment">
          commentcommentcommentcommentcomment commentcommentcomment comment
          comment commentcomment comment
        </div>
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
    width: 30px;
    height: 30px;
    margin: 5px;
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
