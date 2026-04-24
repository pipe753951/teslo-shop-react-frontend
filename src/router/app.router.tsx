import { createBrowserRouter, Navigate } from "react-router";

import ShopLayout from "../shop/layouts/ShopLayout";

//* Public
import HomePage from "../shop/pages/home/HomePage";
import ProductPage from "../shop/pages/product/ProductPage";
import ProductsByGenderPage from "../shop/pages/products_by_gender/ProductsByGenderPage";

//* Authentication
import LoginPage from "../auth/pages/login/LoginPage";
import RegisterPage from "../auth/pages/register/RegisterPage";

//* Administration
import DashboardPage from "../admin/pages/dashboard/DashboardPage";
import AdminProductPage from "../admin/pages/product/AdminProductPage";
import AdminProductsPage from "../admin/pages/products/AdminProductsPage";

//* Lazy components
import { AuthLayout, AdminLayout } from "./lazy-components.router";

export const appRouter = createBrowserRouter([
  //* Public routes.
  {
    path: "/",
    element: <ShopLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "product/:idOrSlug",
        element: <ProductPage />,
      },
      {
        path: "gender/:gender",
        element: <ProductsByGenderPage />,
      },
    ],
  },

  //* Authentication routes.
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },

  //* Administration routes.
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "products/:id",
        element: <AdminProductPage />,
      },
    ],
  },

  //* If route isn't avaliable, redirect to home.
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
