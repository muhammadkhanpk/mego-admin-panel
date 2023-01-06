import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "../components/auth/Login";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../Screens/dashboard/Dashboard";
import Layout from "../Layout/Layout";
import AllServices from "../Screens/allServices/AllServices";
import AllUsers from "../Screens/allUsers/AllUsers";
import AllProviders from "../Screens/allProviders/AllProviders";

export default function AppRoutes() {
  let uid = JSON.parse(sessionStorage.getItem("uid"));
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={uid != null ? <Navigate to={"/dashboard"} /> : <Login />}
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/allUsers"
            element={
              <PrivateRoute>
                <Layout>
                  <AllUsers />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/allProviders"
            element={
              <PrivateRoute>
                <Layout>
                  <AllProviders />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/allServices"
            element={
              <PrivateRoute>
                <Layout>
                  <AllServices />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
