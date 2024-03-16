import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Body from "./src/components/Body";
import Contact from "./src/components/ContactUs";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Login from "./src/components/Login";
import ProfileClass from "./src/components/ProfileClass";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <Provider store={store}> 
      <Header />
      <Outlet />
      <Footer />
    </Provider> 
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children:[{
          path: "profile",
          element: <ProfileClass />,
        }]
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"Cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);