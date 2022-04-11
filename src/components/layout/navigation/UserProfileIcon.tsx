import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "@/enums/style";
import { RoutePath } from "@/enums/routePath";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  selectUser,
  logoutUser,
  getUserById,
} from "@/store/features/userSlice";

interface Props {}

export default function UserProfileIcon({}: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isAuthenticated } = useAppSelector(selectUser);
  const [head, setHead] = useState("N");
  const [isProfileMenuOpen, toggleIsProfileMenuOpen] = useState<boolean>(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate(RoutePath.HOME);
  };

  useEffect(() => {
    if (user.name) setHead(user.name!.charAt(0).toUpperCase());
  }, [user]);

  useEffect(() => {
    dispatch(getUserById());
  }, []);

  return (
    <UserProfileIconContainer>
      <div className="icon">
        <div
          className="clickWrapper"
          onClick={() => toggleIsProfileMenuOpen(!isProfileMenuOpen)}
        >
          <p>{head}</p>
        </div>
        {isProfileMenuOpen && (
          <ul className="menu">
            <li>
              <Link to={`../${RoutePath.USER_PROFILE}`}>Profile</Link>
            </li>
            {isAuthenticated ? (
              <li onClick={() => handleLogout()}>Logout</li>
            ) : (
              <li>
                <Link to={RoutePath.SIGNIN}>Login</Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </UserProfileIconContainer>
  );
}

const UserProfileIconContainer = styled.div`
  .icon {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${Colors.LIGHT_BLUE};
    position: relative;

    .clickWrapper {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    p {
      color: ${Colors.WHITE};
      font-size: 1.3rem;
      position: absolute;
      margin: 0;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .menu {
      list-style-type: none;
      background: ${Colors.WHITE};
      box-shadow: 0.1px 0.2px 0.3px ${Colors.WHITE_GRAY};
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: -180%;
      margin-top: 50px;
      padding: 5px 0;
      z-index: 1;

      li {
        width: 90%;
        margin: 7px auto;
        padding: 1px 30px;
        // border-bottom: solid 1px ${Colors.WHITE_GRAY};
      }

      li:hover {
        opacity: 0.9;
      }
    }
  }
`;
