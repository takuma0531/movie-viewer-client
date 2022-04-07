import React from "react";
import { Navigate } from "react-router-dom";
import { RoutePath } from "@/enums/routePath";

export default function PrivateElement(
  Element: any,
  isAuthenticated: boolean,
  isPublic: boolean
): JSX.Element {
  return isPublic ? (
    <Element />
  ) : isAuthenticated ? (
    <Element />
  ) : (
    <Navigate replace to={RoutePath.SIGNIN} />
  );
}
