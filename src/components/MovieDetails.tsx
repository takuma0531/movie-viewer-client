import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import CommentList from "./section/CommentList";
import { Movie } from "@/typings/models/movie";

export default function MovieDetails() {
  const movie: Movie = {
    title: "title1",
    genre: "genre1",
    description:
      "desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1 desc1desc1 desc1 desc1desc1 desc1 desc1desc1 desc1 desc1",
  };

  return (
    <MovieDetailsContainer>
      <div className="upperRow">
        <div className="left">
          <div className="movieTitle">
            <h3>{movie.title}</h3>
          </div>
          <div className="movieDescription">
            <p>{movie.description}</p>
          </div>
          <div className="ratingWrapper">
            <div className="rating">Rating: 0/5</div>
            <div className="ratingButtonWrapper">rating button</div>
          </div>
        </div>
        <div className="right">
          <div className="thumbnail"></div>
          <div className="stakeholders">
            <div>
              <p>Director: </p>
              {movie.director}
              <p>Artists: </p>
              artist1, artist2, artist3
            </div>
          </div>
        </div>
      </div>
      <div className="lowerRow">
        <h3 className="commentHeader">Comments</h3>
        <div className="commentListWrapper">
          <CommentList />
        </div>
      </div>
    </MovieDetailsContainer>
  );
}

const MovieDetailsContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  .upperRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60%;
    margin: 10px 0;

    .left,
    .right {
      display: flex;
      flex-direction: column;
    }

    .left {
      width: 55%;
      height: 100%;

      .movieTitle {
      }

      .movieDescription {
        width: 100%;
        height: 60%;
        // overflow-y: scroll;
      }

      .ratingWrapper {
        display: flex;
        flex-direction: row;
        margin: 10px 0;

        .rating {
          margin-right: 10px;
        }
      }
    }

    .right {
      width: 43%;

      .thumbnail {
        width: 100%;
        height: 60%;
        max-height: 60%;
        border: 1px solid ${Colors.WHITE_GRAY};
      }

      .stakeholders {
      }
    }
  }

  .lowerRow {
    height: 35%;

    .commentHeader {
      height: 5%;
    }

    .commentListWrapper {
      height: 85%;
      border: 1px solid ${Colors.WHITE_GRAY};
      overflow-y: scroll;
    }
  }
`;
