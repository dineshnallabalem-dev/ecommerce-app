import { Navigate, useNavigate } from "react-router-dom";
import DynamicForm from "../../common/forms/DynamicForm";
import type { FieldConfig } from "../../common/forms/types";
import { loginAdmin, isAdminLoggedIn } from "../services/adminAuth";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  if (isAdminLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  const loginFields: FieldConfig[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      validation: {
        required: true,
        email: true,
      },
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      validation: {
        required: true,
      },
    },
  ];

  const handleLogin = (data: any) => {
    console.log("LOGIN DATA:", data);

    // later: API call
    loginAdmin("dummy-token");
    navigate("/admin");
  };

  return (
    <div className="admin-login-wrapper d-flex align-items-center justify-content-center">
      <div className="card admin-login-card shadow">
        <div className="card-body">
          <h4 className="text-center mb-4">Admin Login</h4>

          <DynamicForm
            fields={loginFields}
            submitLabel="Login"
            onSubmit={handleLogin}
          />

          <p className="text-center mt-3 small">
            Don’t have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
