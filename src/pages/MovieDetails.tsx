import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import TopNavBar from "@/components/layout/navigation/TopNavBar";
import MovieDetailsComponent from "@/components/MovieDetails";

export default function MovieDetails() {
  return (
    <MovieDetailsContainer>
      <div className="topNavbarWrapper">
        <TopNavBar></TopNavBar>
      </div>
      <div className="bodyWrapper">
        <MovieDetailsComponent />
      </div>
    </MovieDetailsContainer>
  );
}

const MovieDetailsContainer = styled.div`
  .bodyWrapper {
    max-width: 100%;
    width: 1200px;
    height: 700px;
    margin: 0 auto;
    background-color: ${Colors.WHITE};
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
  }
`;
