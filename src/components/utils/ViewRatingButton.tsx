import { ButtonText } from "@/enums/form";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "../form";
import ModalWrapper from "../modal";
import RatingStatistics from "../modal/content/RatingStatistics";
import { Colors } from "@/enums/style";

export default function ViewRatingButton() {
  const toggleVisibilityOfRatingStatistics = useRef<any>();

  useEffect(() => {
    toggleVisibilityOfRatingStatistics.current(true);
  });

  return (
    <ViewRatingButtonContainer>
      <Button
        onClick={() => toggleVisibilityOfRatingStatistics.current(true)}
        text={ButtonText.VIEWSRATINGSTATISTICS}
        borderRadius={"20px"}
        fontSize={"14px"}
        fontWeight={"500"}
        color={Colors.WHITE}
        backgroundColor={Colors.LIGHT_BLUE}
        padding={"7px 14px"}
      />
      <ModalWrapper toggleVisibility={toggleVisibilityOfRatingStatistics}>
        <RatingStatistics
          onClose={() => toggleVisibilityOfRatingStatistics.current(false)}
        />
      </ModalWrapper>
    </ViewRatingButtonContainer>
  );
}

const ViewRatingButtonContainer = styled.div`
  position: relative;
`;
