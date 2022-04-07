import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import ModalWrapper from "../modal";
import CreateMovieThread from "../modal/content/CreateMovieThread";
import { Button } from "../form";
import { ButtonText } from "@/enums/form";

export default function CreateMovieThreadButton() {
  const toggleVisibility = useRef<any>();

  useEffect(() => {
    toggleVisibility.current(true);
  });

  return (
    <CreateMovieThreadButtonContainer>
      <Button
        onClick={() => toggleVisibility.current(true)}
        text={ButtonText.CREATEMOVIE}
        borderRadius={"20px"}
        fontSize={"16px"}
        fontWeight={"500"}
        color={Colors.WHITE}
        backgroundColor={Colors.BLACK}
        padding={"7px 20px"}
      />
      <ModalWrapper toggleVisibility={toggleVisibility}>
        <CreateMovieThread onClose={() => toggleVisibility.current(false)} />
      </ModalWrapper>
    </CreateMovieThreadButtonContainer>
  );
}

const CreateMovieThreadButtonContainer = styled.div`
  position: relative;
`;
