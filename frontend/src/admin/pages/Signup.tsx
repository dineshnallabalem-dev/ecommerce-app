import { useNavigate } from "react-router-dom";
import DynamicForm from "../../common/forms/DynamicForm";
import type { FieldConfig } from "../../common/forms/types";
import "./Login.css";

export default function Signup() {
  const navigate = useNavigate();

  const signupFields: FieldConfig[] = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      validation: { required: true },
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      validation: { required: true },
    },
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
        minLength: 8,
        hasLetter: true,
        hasNumber: true,
        hasSpecialChar: true,
      },
    },
  ];

  const handleSignup = (data: any) => {
    console.log("SIGNUP DATA:", data);

    // later: API call
    navigate("/admin/login");
  };

  return (
    <div className="admin-login-wrapper d-flex align-items-center justify-content-center">
      <div className="card admin-login-card shadow">
        <div className="card-body">
          <h4 className="text-center mb-4">Admin Signup</h4>

          <DynamicForm
            fields={signupFields}
            submitLabel="Create Account"
            onSubmit={handleSignup}
          />

          <p className="text-center mt-3 small">
            Already have an account?{" "}
            <span
              className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/admin/login")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
