import React, { useEffect } from "react";
import styled from "styled-components";
import { Movie } from "@/typings/models/movie";
import MovieArticle from "./section/MovieArticle";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { selectMovie, getAllMovies } from "@/store/features/movieSlice";

export default function MovieList() {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector(selectMovie);

  const renderMovieList = movies.map((movie: Movie, index: number) => (
    <MovieArticle key={index} movie={movie} />
  ));

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return <MovieListContainer>{renderMovieList}</MovieListContainer>;
}

const MovieListContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;
