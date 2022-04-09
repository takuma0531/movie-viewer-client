import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { User } from "@/typings/models/user";
import { Movie } from "@/typings/models/movie";
import { ButtonText } from "@/enums/form";
import MovieArticle from "./section/MovieArticle";
import { Button } from "./form";
import ModalWrapper from "./modal";
import UpdateUserProfile from "./modal/content/UpdateUserProfile";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectUser, getUserById } from "@/store/features/userSlice";

export default function UserProfile() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectUser);
  const navigate = useNavigate();
  const toggleVisibilityForUpdatingUserProfile = useRef<any>();

  const head = user.name?.charAt(0).toUpperCase() || "N";

  const goBackToPreviousPage = () => {
    if (window.history.state && window.history.state.idx > 0) navigate(-1);
    else navigate("/", { replace: true });
  };

  const renderMovieList = user.movies?.map((movie: Movie, index: number) => (
    <MovieArticle key={index} movie={movie} />
  ));

  useEffect(() => {
    dispatch(getUserById());
    toggleVisibilityForUpdatingUserProfile.current(false);
  });

  return (
    <UserProfileContainer>
      <ModalWrapper toggleVisibility={toggleVisibilityForUpdatingUserProfile}>
        <UpdateUserProfile
          onClose={() => toggleVisibilityForUpdatingUserProfile.current(false)}
        />
      </ModalWrapper>
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
          <div className="userIcon">
            <p>{head}</p>
          </div>
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
            onClick={() => toggleVisibilityForUpdatingUserProfile.current(true)}
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
  width: 100%;

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
        position: relative;
        width: 80px;
        height: 80px;
        border: 1px solid ${Colors.WHITE_GRAY};
        border-radius: 50%;
        margin-bottom: 5px;

        p {
          color: ${Colors.LIGHT_BLUE};
          font-size: 1.5rem;
          position: absolute;
          margin: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .editProfileButtonWrapper {
      margin-right: 20px;
      margin-top: 10px;
    }
  }

  .movieList {
    width: 70%;
    height: 70%;
    overflow-y: scroll;
  }
`;
