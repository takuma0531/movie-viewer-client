import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { User } from "@/typings/models/user";
import { Movie } from "@/typings/models/movie";
import { ButtonText } from "@/enums/form";
import MovieArticle from "./section/MovieArticle";
import { Button } from "./form";
import { RoutePath } from "@/enums/routePath";

export default function UserProfile() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    email: "",
    name: "user1",
    country: "",
  });
  const movieList: Movie[] = [
    {
      id: "1",
      title: "movie1",
      genre: "genre1",
      description: "desc desc desc",
    },
    {
      id: "2",
      title: "movie2",
      genre: "genre2",
      description: "desc desc desc",
    },
    {
      id: "3",
      title: "movie3333333333333333333333333",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
    {
      id: "4",
      title: "movie3movie3movie3movie3movie3movie3movie3movie3movie3",
      genre: "genre3",
      description:
        "desc desc desc desc descritionasd desc desc descasdfasdf desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
    },
    {
      id: "5",
      title: "movie3",
      genre: "genre3",
      description:
        "desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
    },
    {
      id: "6",
      title: "movie3",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
    {
      id: "7",
      title: "movie3",
      genre: "genre3",
      description: "desc desc desc desc desc desc desc desc desc",
    },
  ];

  const goBackToPreviousPage = () => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1);
    else navigate("/", { replace: true });
  };

  const openEditProfileModal = () => {
    console.log("open edit profile modal");
  };

  const renderMovieList = movieList.map((movie: Movie, index: number) => (
    <MovieArticle key={index} movie={movie} />
  ));

  return (
    <UserProfileContainer>
      <div className="userProfileHeader">
        <Button
          text={"<<"}
          border={"none"}
          fontSize={"16px"}
          fontWeight={"500"}
          color={Colors.BLACK}
          onClick={() => goBackToPreviousPage()}
        />
      </div>
      <div className="userAttribute">
        <div className="userInfo">
          <div className="userIcon"></div>
          <div className="username">{user.name}</div>
        </div>
        <div className="editProfileButtonWrapper">
          <Button
            text={ButtonText.EDITPROFILE}
            borderRadius={"20px"}
            backgroundColor={Colors.LIGHT_BLUE}
            backgroundColorOnHover={Colors.DEEP_BLUE}
            fontSize={"14px"}
            fontWeight={"500"}
            padding={"7px 14px"}
            color={Colors.WHITE}
            onClick={() => openEditProfileModal()}
          />
        </div>
      </div>
      <div className="movieList">{renderMovieList}</div>
    </UserProfileContainer>
  );
}

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .userProfileHeader {
    height: 10%;
    width: 50%;
    margin-top: 10px;
  }

  .userAttribute {
    height: 20%;
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .userInfo {
      display: flex;
      flex-direction: column;
      align-items: center;

      .userIcon {
        width: 80px;
        height: 80px;
        border: 1px solid ${Colors.WHITE_GRAY};
        border-radius: 50%;
        margin-bottom: 5px;
      }
    }

    .editProfileButtonWrapper {
      margin-right: 20px;
      margin-top: 10px;
    }
  }

  .movieList {
    height: 70%;
    overflow-y: scroll;
  }
`;
