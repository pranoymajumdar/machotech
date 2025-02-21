interface User {
  id: number;
  username: string;
}

export function getAuthToken(): string | null {
  return localStorage.getItem('token');
}

export function getUser(): User | null {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}

export function getAuthHeaders(): HeadersInit {
  const token = getAuthToken();
  return {
    'Authorization': `Bearer ${token}`,
  };
}

export function getAuthHeadersForFormData(): HeadersInit {
  const token = getAuthToken();
  return {
    'Authorization': `Bearer ${token}`,
  };
}

export function clearAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
} 