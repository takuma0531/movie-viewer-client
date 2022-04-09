import React from "react";
import styled from "styled-components";
import { Movie } from "@/typings/models/movie";
import MovieArticle from "./section/MovieArticle";
import { useAppSelector } from "@/store/hooks";
import { selectMovie } from "@/store/features/movieSlice";

export default function MovieList() {
  const { movies } = useAppSelector(selectMovie);

  const renderMovieList = movies.map((movie: Movie, index: number) => (
    <MovieArticle key={index} movie={movie} />
  ));

  return <MovieListContainer>{renderMovieList}</MovieListContainer>;
}

const MovieListContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;
