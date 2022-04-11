import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import CommentList from "./section/CommentList";
import { selectMovie } from "@/store/features/movieSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { Artist } from "@/typings/models/artist";
import { getMovieById } from "@/store/features/movieSlice";
import { RoutePath } from "@/enums/routePath";

export default function MovieDetails() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { movie } = useAppSelector(selectMovie);

  const renderArtists = movie.artists?.map((artist: Artist, index: number) => (
    <div key={index}>{artist.name}</div>
  ));

  useEffect(() => {
    const movieId = window.location.search.substring(1).split("=")[1];
    if (movieId) dispatch(getMovieById(movieId));
    else navigate(RoutePath.HOME);
  }, []);

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
            <div className="rating">Rating: {movie.averageRating}/5</div>
            <div className="ratingButtonWrapper">rating button</div>
          </div>
        </div>
        <div className="right">
          <div className="thumbnail"></div>
          <div className="stakeholders">
            <div>
              <div>
                <p>Director: </p>
                <div>{movie.director?.name}</div>
              </div>
              <div>
                <p>Artist: </p>
                {renderArtists}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerRow">
        <h3 className="commentHeader">Comments</h3>
        <div className="commentListWrapper">
          <CommentList comments={movie.comments} />
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
