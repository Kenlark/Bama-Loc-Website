import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPages.jsx";
import SharedLayout from "./layouts/SharedLayouts.jsx";
import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import Options from "./pages/Options.jsx";
import Infos from "./pages/Infos.jsx";
import Contact from "./pages/FormContact.jsx";
import RentalConditions from "./pages/RentalConditions.jsx";
import LegalNotice from "./pages/LegalNotice.jsx";
import PrivacyPolicy from "./pages/PrivacyPage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        {
          path: "conditions-generales-de-location",
          element: <RentalConditions />,
        },
        {
          path: "mentions-legales",
          element: <LegalNotice />,
        },
        {
          path: "politique-de-confidentialite",
          element: <PrivacyPolicy />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default ReactRouter;
