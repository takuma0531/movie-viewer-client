import React from "react";
import styled from "styled-components";
import SignInComponent from "../components/SignIn";

export default function SignIn() {
  return (
    <SignInContainer>
      <SignInComponent />
    </SignInContainer>
  );
}

const SignInContainer = styled.div``;
