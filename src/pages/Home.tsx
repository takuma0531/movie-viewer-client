import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import TopNavBar from "@/components/layout/navigation/TopNavBar";
import MovieSearcher from "@/components/layout/navigation/MovieSearcher";

export default function Home() {
  return (
    <HomeContainer>
      <div className="topNavbarWrapper">
        <TopNavBar>
          <MovieSearcher />
        </TopNavBar>
      </div>
      <div className="bodyWrapper">Movie list</div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  .bodyWrapper {
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    background-color: ${Colors.WHITE};
    display: flex;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
