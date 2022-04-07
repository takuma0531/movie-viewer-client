import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, InputField, Select } from "@/components/form";
import {
  InputFieldLabel,
  InputFieldType,
  InputFieldName,
  ButtonText,
} from "@/enums/form";
import { Colors } from "@/enums/style";
import { User } from "@/typings/models/user";
import countriesData from "public/assets/countries.json";

interface Props {
  onClose: any;
}

export default function UpdateUserProfile({ onClose }: Props) {
  const [user, setUser] = useState<User>({
    email: "",
    name: "",
    country: "",
  });
  const [countries, setCountries] = useState<{ name: string; code: string }[]>(
    []
  );

  const returnCountryOptions = countries.map((country, index) => (
    <option key={index} value={country.code}>
      {country.name}
    </option>
  ));

  const handleSubmitting = (e: any) => {
    e.preventDefault();
    console.log(user);
    console.log("update user");
    onClose();
  };

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <UpdateUserProfileContainer>
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
        <div className="buttonSection">
          <Button
            text={ButtonText.CLOSE}
            border={"none"}
            fontSize={"14px"}
            fontWeight={"500"}
            color={Colors.BLACK}
            onClick={() => onClose()}
          />
          <Button
            padding={"4px 8px"}
            text={ButtonText.CONFIRM}
            borderRadius={"20px"}
            backgroundColor={Colors.BLACK}
            backgroundColorOnHover={Colors.LIGHT_BLACK}
            fontSize={"14px"}
            fontWeight={"500"}
            color={Colors.WHITE}
          />
        </div>
        <InputField
          name={InputFieldName.NAME}
          type={InputFieldType.TEXT}
          value={user.name!}
          label={InputFieldLabel.NAME}
          onChange={(e) =>
            setUser((prevState: User) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <InputField
          name={InputFieldName.EMAIL}
          type={InputFieldType.EMAIL}
          value={user.email!}
          label={InputFieldLabel.EMAIL}
          onChange={(e) =>
            setUser((prevState: User) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
        <Select
          name={InputFieldName.COUNTRY}
          label={InputFieldLabel.COUNTRY}
          selectValue={user.country}
          onChange={(e: any) =>
            setUser((prevState: User) => ({
              ...prevState,
              country: e.target.value,
            }))
          }
          options={returnCountryOptions}
        />
      </FormContainer>
    </UpdateUserProfileContainer>
  );
}

const UpdateUserProfileContainer = styled.div`
  width: 450px;
  height: 490px;
  margin: 0 auto;
  background: ${Colors.WHITE};
  border-radius: 5px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;
  margin: 0 auto;

  .buttonSection {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }

  * {
    margin: 3px 0;
  }
`;
