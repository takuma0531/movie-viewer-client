import React from "react";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import TopNavBar from "@/components/layout/navigation/TopNavBar";
import UserProfileComponent from "@/components/UserProfile";

export default function UserProfile() {
  return (
    <UserProfileContainer>
      <div className="topNavbarWrapper">
        <TopNavBar />
      </div>
      <div className="bodyWrapper">
        <UserProfileComponent />
      </div>
    </UserProfileContainer>
  );
}

const UserProfileContainer = styled.div`
  .bodyWrapper {
    max-width: 100%;
    width: 1200px;
    height: 700px;
    margin: 0 auto;
    background-color: ${Colors.WHITE};
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 10px;
  }
`;
