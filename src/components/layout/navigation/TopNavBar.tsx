import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RoutePath } from "@/enums/routePath";
import { Colors } from "@/enums/style";
import UserProfileIcon from "./UserProfileIcon";

interface Props {
  children?: JSX.Element;
}

export default function TopNavBar({ children }: Props) {
  return (
    <TopNavBarContainer>
      <div className="innerTopNavBar">
        <div>
          <Link to={RoutePath.HOME}>
            <h1>Movie Viewer</h1>
          </Link>
        </div>
        <div className="children">{children}</div>
        <UserProfileIcon />
      </div>
    </TopNavBarContainer>
  );
}

const TopNavBarContainer = styled.div`
  width: 100%;
  background-color: ${Colors.WHITE};
  color: ${Colors.GRAY};

  .innerTopNavBar {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 1.5rem;
      color: ${Colors.LIGHT_BLUE};
    }

    .children {
        width: 30%;
    }

    .profileIcon {
      cursor: pointer;
      font-size: 1.1rem;
    }
  }
`;
