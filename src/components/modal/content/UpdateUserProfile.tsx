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

export default function UpdateUserProfile() {
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

  const handleSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    console.log("update user");
  };

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  return (
    <UpdateUserProfileContainer>
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
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
        <Button
          text={ButtonText.CONFIRM}
          borderRadius={"20px"}
          backgroundColor={Colors.LIGHT_BLUE}
          backgroundColorOnHover={Colors.DEEP_BLUE}
          fontSize={"16px"}
          fontWeight={"500"}
          color={Colors.WHITE}
        />
      </FormContainer>
    </UpdateUserProfileContainer>
  );
}

const UpdateUserProfileContainer = styled.div``;

const FormContainer = styled.form``;
