import React, { useState } from "react";
import styled from "styled-components";
import { InputFieldType, ButtonText } from "@/enums/form";
import { Colors } from "@/enums/style";
import { Button, InputField } from "@/components/form";

interface Props {}

export default function MovieSearcher({}: Props) {
  const [inputTitle, setInputTitle] = useState<string>("");

  const handleSearching = async () => {
    console.log("searching...");
  };

  return (
    <MovieSearcherContainer>
      <InputField
        isLabelRequired={false}
        type={InputFieldType.TEXT}
        value={inputTitle}
        isRequired={false}
        onChange={(e) => setInputTitle(e.target.value)}
        placeHolder="Search Movie"
        borderRadius="15px"
        fontSize="0.9rem"
      />
      <Button
        onClick={handleSearching}
        text={ButtonText.SEARCH}
        fontSize={"0.8rem"}
        border={"none"}
        borderLeft={`solid 1px ${Colors.LIGHT_GRAY}`}
        borderRadius={"0"}
        color={Colors.LIGHT_BLUE}
        fontWeight={"bolder"}
        padding={"5px 3px"}
        textShadowOnHover={"1px 2px 1.5px #a9a9a94d"}
      />
    </MovieSearcherContainer>
  );
}

const MovieSearcherContainer = styled.div`
  //   width: 100%;
  position: relative;
  margin-right: 10px;
  button {
    top: 50%;
    transform: translateY(-50%);
    right: 2%;
    position: absolute;
  }
`;
