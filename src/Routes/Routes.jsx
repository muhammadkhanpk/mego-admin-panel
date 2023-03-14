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
import AllSubServices from "../Screens/allSubServices/AllSubServices";
import UserDetails from "../components/users/details/UserDetails";
import AllSliders from "../Screens/allSliders/AllSliders";
import AllBookingLists from "../Screens/allBookings/AllBookingLists";
import AllPayments from "../Screens/allPayments/AllPayments";
import Pushnotification from "../Screens/pushNotification/Pushnotification";
import BookingSetting from "../Screens/bookingSettings/BookingSetting";
import MultiSettings from "../Screens/multisettings/MultiSettings";
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
            path="/allUsers/:userId"
            element={
              <PrivateRoute>
                <Layout>
                  <UserDetails />
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
            path="/allSubServices/:serviceId"
            element={
              <PrivateRoute>
                <Layout>
                  <AllSubServices />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/allBookingLists"
            element={
              <PrivateRoute>
                <Layout>
                  <AllBookingLists />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/allSliders"
            element={
              <PrivateRoute>
                <Layout>
                  <AllSliders />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <Layout>
                  <AllPayments />
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
          <Route
            path="/push-notification"
            element={
              <PrivateRoute>
                <Layout>
                  <Pushnotification />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/booking-setting"
            element={
              <PrivateRoute>
                <Layout>
                  <BookingSetting />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/multi-settings"
            element={
              <PrivateRoute>
                <Layout>
                  <MultiSettings />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
