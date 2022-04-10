import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Colors } from "@/enums/style";
import ModalWrapper from "../modal";
import CreateMovieThread from "../modal/content/CreateMovieThread";
import { Button } from "../form";
import { ButtonText } from "@/enums/form";
import { RoutePath } from "@/enums/routePath";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/features/userSlice";

export default function CreateMovieThreadButton() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAppSelector(selectUser);
  const toggleVisibilityOfCreateModal = useRef<any>();

  const handleClickButton = () => {
    isAuthenticated
      ? toggleVisibilityOfCreateModal.current(true)
      : navigate(RoutePath.SIGNIN);
  };

  useEffect(() => {
    toggleVisibilityOfCreateModal.current(false);
  });

  return (
    <CreateMovieThreadButtonContainer>
      <Button
        onClick={() => handleClickButton()}
        text={ButtonText.CREATEMOVIE}
        borderRadius={"20px"}
        fontSize={"16px"}
        fontWeight={"500"}
        color={Colors.WHITE}
        backgroundColor={Colors.BLACK}
        padding={"7px 20px"}
      />
      <ModalWrapper toggleVisibility={toggleVisibilityOfCreateModal}>
        <CreateMovieThread
          onClose={() => toggleVisibilityOfCreateModal.current(false)}
        />
      </ModalWrapper>
    </CreateMovieThreadButtonContainer>
  );
}

const CreateMovieThreadButtonContainer = styled.div`
  position: relative;
`;
