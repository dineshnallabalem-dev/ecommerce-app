import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminRoutes from "../admin/routes/AdminRoutes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
