import React from "react";
import styled from "styled-components";
import { Movie } from "@/typings/models/movie";
import MovieArticle from "./section/MovieArticle";

export default function MovieList() {
  const movieList: Movie[] = [
    { title: "movie1", genre: "genre1", description: "desc desc desc" },
    { title: "movie2", genre: "genre2", description: "desc desc desc" },
    {
      title: "movie3333333333333333333333333",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
    {
      title: "movie3movie3movie3movie3movie3movie3movie3movie3movie3",
      genre: "genre3",
      description:
        "desc desc desc desc descritionasd desc desc descasdfasdf desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
    },
    {
      title: "movie3",
      genre: "genre3",
      description:
        "desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
    },
    {
      title: "movie3",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
    {
      title: "movie3",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
  ];

  const renderMovieList = movieList.map((movie: Movie, index: number) => (
    <MovieArticle key={index} movie={movie} />
  ));

  return <MovieListContainer>{renderMovieList}</MovieListContainer>;
}

const MovieListContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
`;
