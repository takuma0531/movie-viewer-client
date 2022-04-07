import React, { useState } from "react";
import styled from "styled-components";
import { Button, InputField, Select } from "../form";
import {
  InputFieldName,
  InputFieldType,
  ButtonText,
  InputFieldLabel,
} from "@/enums/form";
import { Colors } from "@/enums/style";
import { Rating } from "@/typings/models/rating";
import { Comment } from "@/typings/models/comment";

export default function CommentInputField() {
  const [rating, setRating] = useState<Rating>({
    point: 1,
  });
  const [comment, setComment] = useState<Comment>({
    text: "",
  });
  const ratingScale = [1, 2, 3, 4, 5];

  const renderRatingOptions = ratingScale.map(
    (point: number, index: number) => <option key={index}>{point}</option>
  );

  const handleSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit rating or comment data");
  };

  return (
    <CommentInputFieldContainer>
      <div className="left">
        <div className="icon"></div>
      </div>
      <div className="right">
        <FormContainer onSubmit={(e) => handleSubmitting(e)}>
          <Select
            name={InputFieldName.COMMENT}
            isLabelRequired={false}
            selectValue={rating?.point}
            onChange={(e: any) =>
              setRating((prevState: Rating) => ({
                ...prevState,
                point: e.target.value,
              }))
            }
            options={renderRatingOptions}
            borderRadius={"20px"}
          />
          <InputField
            name={InputFieldName.COMMENT}
            type={InputFieldType.TEXT}
            value={comment.text!}
            isLabelRequired={false}
            onChange={(e) =>
              setComment((prevState: Comment) => ({
                ...prevState,
                text: e.target.value,
              }))
            }
            isRequired={false}
            borderRadius={"20px"}
            placeHolder={"You can write down your comment as well"}
            fontSize={"13px"}
          />
          <Button
            padding={"4px 8px"}
            text={ButtonText.CONFIRM}
            borderRadius={"20px"}
            color={Colors.WHITE}
            backgroundColor={Colors.BLACK}
            backgroundColorOnHover={Colors.LIGHT_BLACK}
            fontSize={"14px"}
            fontWeight={"500"}
          />
        </FormContainer>
      </div>
    </CommentInputFieldContainer>
  );
}

const CommentInputFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  align-items: center;

  .left {
    .icon {
      border: 1px solid ${Colors.WHITE_GRAY};
      border-radius: 50%;
      width: 30px;
      height: 30px;
      margin: 5px;
    }
  }

  .right {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  * {
    margin: 0 1px;
  }

  *:nth-of-type(2) {
    flex-basis: 80%;
  }
`;
