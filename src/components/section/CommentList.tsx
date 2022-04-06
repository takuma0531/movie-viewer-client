import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import CommentRow from "./CommentRow";

export default function CommentList() {
  return (
    <CommentListContainer>
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
