import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPages.jsx";
import SharedLayout from "./layouts/SharedLayouts.jsx";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import Options from "./pages/Options.jsx";
import Infos from "./pages/Infos.jsx";
import Contact from "./pages/FormContact.jsx";

const ReactRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <SharedLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "vehicule",
          element: <Cars />,
        },
        {
          path: "options",
          element: <Options />,
        },
        {
          path: "infos",
          element: <Infos />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default ReactRouter;
