import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/components/routing/PrivateRoute";
import {
  HomePage,
  MovieDetailsPage,
  SignInPage,
  UserProfilePage,
} from "@/pages";
import { RoutePath } from "@/enums/routePath";

// TODO:
export default function RouteHandler() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={RoutePath.HOME}
            element={PrivateRoute(
              HomePage,
              RoutePath.HOME,
              isAuthenticated,
              true
            )}
          />
          <Route
            path={RoutePath.MOVIE_DETAIL}
            element={PrivateRoute(
              MovieDetailsPage,
              RoutePath.MOVIE_DETAIL,
              isAuthenticated,
              true
            )}
          />
          <Route
            path={RoutePath.SIGNIN}
            element={PrivateRoute(
              SignInPage,
              RoutePath.SIGNIN,
              isAuthenticated,
              true
            )}
          />
          <Route
            path={RoutePath.USER_PROFILE}
            element={PrivateRoute(
              UserProfilePage,
              RoutePath.USER_PROFILE,
              isAuthenticated,
              false
            )}
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
