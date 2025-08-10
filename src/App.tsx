import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { HomePg, LoginPg, RegisterPg, UserPg } from "./pages";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import { Toaster } from "react-hot-toast";

function App() {
 

  useEffect(() =>{
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  })

  function Root() {
    return(
      <div>
        <Routes>
          <Route path="/" element={<HomePg />} />
          <Route path="/login" element={<LoginPg />} />
          <Route path="/register" element={<RegisterPg />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user/*" element={<UserPg />} />
        </Routes>
        <Toaster />
      </div>
    )
  }

  const router = createBrowserRouter([{
    path: "*",
    Component: Root
  }])

  // const WhatsLinkUs = "https://wa.link/p0wwxu";

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
