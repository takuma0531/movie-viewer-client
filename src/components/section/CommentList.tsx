import React from "react";
import styled from "styled-components";
import CommentRow from "./CommentRow";
import CommentInputField from "./CommentInputField";

export default function CommentList() {
  return (
    <CommentListContainer>
      <CommentInputField />
      <CommentRow />
      <CommentRow />
      <CommentRow />
      <CommentRow />
      <CommentRow />
    </CommentListContainer>
  );
}

const CommentListContainer = styled.div`
  margin: 5px 0;
`;
