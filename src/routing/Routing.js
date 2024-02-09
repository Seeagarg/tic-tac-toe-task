import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GameMultiplayerPage from "../pages/GameMultiplayerPage";
import HomePage from "../pages/HomePage";
import GameComputerPage from "../pages/GameComputerPage";

const Routing = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/game-mode-multiplayer",
      element: <GameMultiplayerPage />,
    },
    {
        path:"/game-mode-singleplayer",
        element:<GameComputerPage />
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Routing;
