import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, InputField, Select } from "./form";
import { Colors } from "@/enums/style";
import { Gender } from "@/enums/userInfo";
import {
  InputFieldName,
  InputFieldLabel,
  InputFieldType,
  ButtonText,
  FormTitle,
} from "@/enums/form";
import { User } from "@/typings/models/user";
import countriesData from "public/assets/countryInfo.json";
import genderListData from "public/assets/genderList.json";
import { useAppDispatch } from "@/store/hooks";
import { registerUser, loginUser } from "@/store/features/userSlice";

export default function SignIn() {
  const dispatch = useAppDispatch();

  const [isSignIn, toggleIsSignIn] = useState(true);
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    name: "",
    country: "Afghanistan",
    continent: "Asia",
    age: 20,
    gender: Gender.MALE,
  });
  const [countries, setCountries] = useState<
    { country: string; continent: string }[]
  >([]);
  const [genderList, setGenderList] = useState<
    { value: number; category: string }[]
  >([]);

  const handleSubmitting = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSignIn ? dispatch(loginUser(user)) : dispatch(registerUser(user));
  };

  const returnCountryOptions = countries.map((country, index) => (
    <option
      key={index}
      value={country.country}
      data-continent={country.continent}
    >
      {country.country}
    </option>
  ));

  const returnGenderOptions = genderList.map((gender, index) => (
    <option key={index} value={gender.value}>
      {gender.category}
    </option>
  ));

  const onChangeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const continent = e.target.selectedOptions[0].getAttribute(
      "data-continent"
    ) as string;
    const country = e.target.value;
    setUser((prevState: User) => ({
      ...prevState,
      country,
      continent,
    }));
  };

  useEffect(() => {
    setCountries(countriesData);
    setGenderList(genderListData);
  }, []);

  return (
    <SignInContainer className="signIn">
      <FormContainer onSubmit={(e) => handleSubmitting(e)}>
        <h1>{isSignIn ? FormTitle.SIGNIN : FormTitle.SIGNUP}</h1>
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
        <InputField
          name={InputFieldName.PASSWORD}
          type={InputFieldType.PASSWORD}
          value={user.password!}
          label={InputFieldLabel.PASSWORD}
          onChange={(e) =>
            setUser((prevState: User) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
        {!isSignIn && (
          <div>
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
            <Select
              name={InputFieldName.COUNTRY}
              label={InputFieldLabel.COUNTRY}
              selectValue={user.country}
              onChange={(e: any) => onChangeCountry(e)}
              options={returnCountryOptions}
            />
            <Select
              name={InputFieldName.GENDER}
              label={InputFieldLabel.GENDER}
              selectValue={user.gender}
              onChange={(e: any) =>
                setUser((prevState: User) => ({
                  ...prevState,
                  gender: e.target.value,
                }))
              }
              options={returnGenderOptions}
            />
            <InputField
              name={InputFieldName.AGE}
              type={InputFieldType.NUMBER}
              value={user.age!}
              label={InputFieldLabel.AGE}
              onChange={(e) =>
                setUser((prevState: User) => ({
                  ...prevState,
                  age: Number(e.target.value),
                }))
              }
            />
          </div>
        )}
        <Button
          text={isSignIn ? ButtonText.SIGNIN : ButtonText.SIGNUP}
          borderRadius={"20px"}
          backgroundColor={Colors.LIGHT_BLUE}
          backgroundColorOnHover={Colors.DEEP_BLUE}
          fontSize={"16px"}
          fontWeight={"500"}
          color={Colors.WHITE}
        />
        <GuidingTextToSignInOrUp>
          or {""}
          <span onClick={() => toggleIsSignIn(!isSignIn)}>
            {isSignIn ? ButtonText.SIGNUP : ButtonText.SIGNIN}
          </span>
        </GuidingTextToSignInOrUp>
      </FormContainer>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: ${Colors.WHITE};
  width: 400px;
  border-radius: 10px;

  h1 {
    padding-top: 10px;
    color: ${Colors.LIGHT_BLUE};
    text-align: center;
  }
`;

const FormContainer = styled.form`
  width: 80%;
  margin: 0 auto;

  div {
    margin: 10px 0;
  }

  button {
    width: 100%;
    margin: 10px auto;
    padding: 8px 0;
  }
`;

const GuidingTextToSignInOrUp = styled.div`
  text-align: center;
  padding-bottom: 20px;

  span {
    cursor: pointer;
    color: ${Colors.LIGHT_BLUE};
    :hover {
      color: ${Colors.DEEP_BLUE};
    }
  }
`;
