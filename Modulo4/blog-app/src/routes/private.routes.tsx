/*
import { PostList } from "../pages/private/Posts";
import { Categories } from "../pages/private/Categories";
import { Users } from "../pages/private/Users";
import { DashboardLayout } from "../layouts/DashboardLayout";
import type { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    { path: "posts", element: <PostList /> },
    { path: "categories", element: <Categories /> },
    { path: "users", element: <Users /> },
  ],
};*/


/*
import { RouteObject } from "react-router-dom";
import DashboardHome from "../pages/private/DashboardHome";
import PrivatePlaceholder from "../pages/private/PrivatePlaceholder";
import CategoriesPage from "../pages/private/CategoriesPage";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  children: [
    { index: true, element: <DashboardHome /> },
    { path: "categories", element: <CategoriesPage /> },
    { path: "posts", element: <PrivatePlaceholder title="Posts" /> },
    { path: "users", element: <PrivatePlaceholder title="Users" /> },
  ],
};

*/

import { RouteObject } from "react-router-dom";
import DashboardHome from "../pages/private/DashboardHome";
import PrivatePlaceholder from "../pages/private/PrivatePlaceholder";
import CategoriesPage from "../pages/private/CategoriesPage";
import PostsPage from "../pages/private/PostsPage";

export const privateRoutes: RouteObject = {
  path: "/dashboard",
  children: [
    { index: true, element: <DashboardHome /> },
    { path: "categories", element: <CategoriesPage /> },
    { path: "posts", element: <PostsPage /> },
    { path: "users", element: <PrivatePlaceholder title="Users" /> },
  ],
};