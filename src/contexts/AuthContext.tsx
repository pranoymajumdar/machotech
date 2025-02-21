import { createContext, useContext, useEffect, useState } from "react";
import { getAuthToken, getUser, clearAuth } from "@/lib/auth";
import { useLocation, useNavigate } from "@tanstack/react-router";

interface User {
  id: number;
  username: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (token: string, userData: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(getUser());
  const navigate = useNavigate();
  const location = useLocation();

  const login = (token: string, userData: User) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    clearAuth();
    setUser(null);
    navigate({ to: "/dashboard/auth/login" });
  };

  useEffect(() => {
    // Check token validity on mount and when token changes
    const token = getAuthToken();
    const userData = getUser();

    if (!token || !userData) {
      if (location.href.includes("dashboard")) {
        logout();
      }
    } else {
      setUser(userData);
    }
  }, []);

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
