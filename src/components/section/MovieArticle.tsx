import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Movie } from "@/typings/models/movie";
import { Colors } from "@/enums/style";
import { RoutePath, Query } from "@/enums/routePath";

interface Props {
  movie: Movie;
}

export default function MovieArticle({ movie }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${RoutePath.MOVIE_DETAIL}?${Query.MOVIEID}=${movie.id}`);
  };

  return (
    <MovieArticleContainer onClick={() => handleClick()}>
      <div className="header">
        <h3>{movie.title}</h3>
        <div className="rating">Rating: 0/5</div>
      </div>
      <div className="body">
        <div className="thumbnail">{movie.thumbnail || "thumnail"}</div>
        <div className="description">{movie.description}</div>
      </div>
    </MovieArticleContainer>
  );
}

const MovieArticleContainer = styled.div`
  cursor: pointer;
  margin: 0 auto;
  width: 50%;
  height: 30%;
  border: 1px solid ${Colors.WHITE_GRAY};
  padding: 0 10px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20%;
    // border-bottom: 1px solid ${Colors.WHITE_GRAY};

    h3 {
      margin-right: 5px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
      width: 80%;
    }
  }

  .body {
    display: flex;
    justify-content: space-between;
    height: 80%;

    .thumbnail {
      width: 40%;
      height: 100%;
    }

    .description {
      overflow: hidden;
      line-height: 1.5;
      width: 55%;
      max-height: 100%;
      text-align: left;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 7;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
