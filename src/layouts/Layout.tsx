import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root/Root.tsx";
import MainLayout from "./mainLayout/MainLayout.tsx";
import Home from "../page/home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [{ path: "/", element: <Home /> }],
      },
    ],
  },
]);

const Layout: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Layout;
/**  {
    path: "admin",
    element: <PrivateRoot />,
    children: [
      {
        path: "product-list",
        element: <AdminLayout />,
        children: [{ path: "", element: <ProductsPage /> }],
      },
      {
        path: "add-product",
        element: <AdminLayout />,
        children: [{ path: "", element: <AddNewProductPage /> }],
      },
      {
        path: "users-list",
        element: <AdminLayout />,
        children: [{ path: "", element: <UsersListPage /> }],
      },
    ],
  },
  {
    path: "user",
    element: <UserRoot />,
    children: [
      { path: "", element: <Home /> },

      { path: "our-products", element: <ProductCard /> },
      { path: "contact", element: <ContactPage /> },
      { path: "produit/:id", element: <ProductDetailsPage /> },
      { path: "commandes", element: <CommandeList /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  }, */
