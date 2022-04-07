import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import TopNavBar from "@/components/layout/navigation/TopNavBar";
import MovieSearcher from "@/components/layout/navigation/MovieSearcher";
import MovieList from "@/components/MovieList";
import CreateMovieThreadButton from "@/components/utils/CreateMovieThreadButton";

export default function Home() {
  return (
    <HomeContainer>
      <div className="topNavbarWrapper">
        <TopNavBar>
          <MovieSearcher />
        </TopNavBar>
      </div>
      <div className="bodyWrapper">
        <div className="createMovieThreadButtonWrapper">
          <CreateMovieThreadButton />
        </div>
        <MovieList />
      </div>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
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

    .createMovieThreadButtonWrapper {
      position: absolute;
      top: 50%;
      left: 7%;
    }
  }
`;
