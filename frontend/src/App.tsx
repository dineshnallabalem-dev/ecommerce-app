import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import PrivateRoute from "./admin/PrivateRoute";
import AdminLayout from "./admin/AdminLayout";
import AdminHome from "./admin/AdminHome";
import ProductList from "./admin/products/ProductList";
import AddProduct from "./admin/products/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="products" element={<ProductList />} />
          <Route path="products/add" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
