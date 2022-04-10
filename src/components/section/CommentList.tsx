import React from "react";
import styled from "styled-components";
import CommentRow from "./CommentRow";
import CommentInputField from "./CommentInputField";
import { Comment } from "@/typings/models/comment";

interface Props {
  comments?: Comment[];
}

export default function CommentList({ comments }: Props) {
  const renderComments = comments?.map((comment: Comment) => {
    return <CommentRow comment={comment} />;
  });

  return (
    <CommentListContainer>
      <CommentInputField />
      {renderComments}
    </CommentListContainer>
  );
}

const CommentListContainer = styled.div`
  margin: 5px 0;
`;
