import React, { Suspense, lazy, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginProtected, Protected } from "./routes/LoginProtected";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "./store/AuthReducer";
import Cookies from "js-cookie";
import { isDay } from "./functions/isDay";

const NoPage = lazy(() => import("./pages/404"));
const FriendsPage = lazy(() => import("./pages/FriendsPage"));
const Activate = lazy(() => import("./pages/Activate"));
const Profile = lazy(() => import("./pages/Profile"));
const Home = lazy(() => import("./pages/Home"));
const Forgot = lazy(() => import("./pages/Forgot"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/profile/:username",
        element: (
          <Suspense>
            <Profile />
          </Suspense>
        ),
      },
      {
        path: "/activate/:token",
        element: (
          <Suspense>
            <Activate />
          </Suspense>
        ),
      },
      {
        path: "/friends-page",
        element: (
          <Suspense>
            <FriendsPage />
          </Suspense>
        ),
      },
      {
        path: "/friends-page/:type",
        element: (
          <Suspense>
            <FriendsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginProtected />,
  },
  {
    path: "/forgot",
    element: <Suspense><Forgot /></Suspense>,
  },
  {
    path: "*",
    element: (
      <Suspense>
        <NoPage />
      </Suspense>
    ),
  },
]);

function App() {
  const dispatch = useDispatch();
  const { darkTheme, compactMode } = useSelector((state) => state.Auth);

  useEffect(() => {
    compactMode && dispatch(setDarkTheme(isDay()));
  }, [compactMode, dispatch]);

  useEffect(() => {
    Cookies.set("dark", darkTheme);
    Cookies.set("compactMode", compactMode);
  }, [darkTheme, compactMode]);

  return <RouterProvider router={router} />;
}

export default App;
