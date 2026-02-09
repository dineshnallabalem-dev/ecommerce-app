import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminRoutes from "./admin/routes/AdminRoutes";
import AppLayout from "./AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />

        {/* ADMIN */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Route>
    </Routes>
  );
}

export default App;
