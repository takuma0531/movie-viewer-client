import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/components/routing/PrivateRoute";
import {
  HomePage,
  MovieDetailsPage,
  SignInPage,
  UserProfilePage,
} from "@/pages";
import { RoutePath } from "@/enums/routePath";

export default function RouteHandler() {
  const isAuthenticated = true;

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={RoutePath.HOME}
            element={PrivateRoute(HomePage, isAuthenticated, true)}
          />
          <Route
            path={RoutePath.MOVIE_DETAIL}
            element={PrivateRoute(MovieDetailsPage, isAuthenticated, true)}
          />
          <Route
            path={RoutePath.SIGNIN}
            element={PrivateRoute(SignInPage, isAuthenticated, true)}
          />
          <Route
            path={RoutePath.USER_PROFILE}
            element={PrivateRoute(UserProfilePage, isAuthenticated, false)}
          />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
