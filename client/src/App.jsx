import { RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import SignUp from "./pages/sign-up";
import SignIn from "./pages/sign-in";
import ForgotPassword from "./pages/forgot-password";
import ResetPaddword from "./pages/reset-password";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "/reset-password",
          element: <ResetPaddword />,
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

export default App;
