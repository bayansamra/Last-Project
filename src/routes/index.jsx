import React, { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuthContext } from "../context/ContextAuthor";
import ProtectedRoute from "./../components/ProtectedRoute/index";


const Login = lazy(() => import("../pages/Login/index"));
const Signup = lazy(() => import("../pages/Signup/index"));
const Home = lazy(() => import("../pages/Home/index"));
const Filter = lazy(() => import("./../pages/Filter/index"));
const Profile = lazy(() => import("./../pages/Profile/index"));
const DetailsJob = lazy(() => import("./../pages/DetailesJop/index"));



const Routers = () => {
  const { authorized } = useAuthContext();




  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={authorized ? <Navigate to="/home" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authorized ? <Navigate to="/home" /> : <Signup />}
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/redirect" element={<Navigate to={"/profile"} />} />
          <Route path="/DetailsJob/:id" element={<DetailsJob/>} />
        </Route>
        <Route path="/*" element={<h3>Page not Found</h3>} />
      </Routes>
    </Suspense>
  );
};

export default Routers;
