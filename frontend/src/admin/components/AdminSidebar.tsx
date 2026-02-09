import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside style={{ width: 200, background: "#f4f4f4", padding: 20 }}>
      <h3>Admin</h3>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink to="/admin">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/admin/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
