import { useAuth } from "@/contexts/AuthContext";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav>
      {user ? (
        <div>
          <span>Welcome, {user.username}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Link to="/dashboard/auth/login">Login</Link>
      )}
    </nav>
  );
} 