import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/Products/ProductList";
import AdminLayout from "../layout/AdminLayout";
import { isAdminLoggedIn } from "../services/adminAuth";
import Signup from "../pages/Signup";
import React from "react";

const ProtectedAdmin = ({ children }: { children: React.ReactNode }) => {
  return isAdminLoggedIn()
    ? <>{children}</>
    : <Navigate to="/admin/login" replace />;
};

export default function AdminRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/signup" element={<Signup />} />
      <Route path="login" element={<Login />} />

      {/* PROTECTED */}
      <Route
        element={
          <ProtectedAdmin>
            <AdminLayout />
          </ProtectedAdmin>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
      </Route>
    </Routes>
  );
}
