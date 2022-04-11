import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "@/components/routing/PrivateRoute";
import {
  HomePage,
  MovieDetailsPage,
  SignInPage,
  UserProfilePage,
} from "@/pages";
import { RoutePath } from "@/enums/routePath";
import { selectUser } from "@/store/features/userSlice";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { checkAuth } from "@/store/features/userSlice";
import { JwtService } from "@/services/localStorage/JwtService";

export default function RouteHandler() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector(selectUser);

  useEffect(() => {
    if (JwtService.getToken()) dispatch(checkAuth());
  }, []);

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
