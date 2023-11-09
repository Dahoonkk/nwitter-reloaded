import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/create-account",
    element: <CreateAccount />
  }
])

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    font-family: "Helvetica", "Arial", sans-serif;

  }
`;



function App() {
  const[isLoading, setLoading] = useState(true);
  const init = async() => {
    // wait for firebase
    // setTimeout(() => setIsLoading(false), 1000); -> for test loading
    await auth.authStateReady();
    setLoading(false);
  }
  useEffect(() => {
    init();
  }, [])
  return (
    <>
      <GlobalStyles />
      {isLoading ? <LoadingScreen/> : <RouterProvider router={router} />}
    </>
  )
}

export default App
