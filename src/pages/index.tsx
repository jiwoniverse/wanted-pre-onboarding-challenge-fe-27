import { lazy } from "react";

export const HomePage = lazy(() => import("@/pages/HomePage"));
export const LoginPage = lazy(() => import("@/pages/LoginPage"));
export const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
export const TodoListPage = lazy(() => import("@/pages/TodoListPage"));
export const TodoDetailPage = lazy(() => import("@/pages/TodoDetailPage"));
