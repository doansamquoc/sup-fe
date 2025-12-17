import AuthLayout from "@/core/layouts/AuthLayout";
import type { RouteObject } from "react-router-dom";
import LoginPage from "./login/pages/LoginPage";
import SignupPage from "./signup/SignupPage";

export const AuthRoutes: RouteObject[] = [
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
    ],
  },
];
