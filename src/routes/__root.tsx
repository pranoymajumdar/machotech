import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import "@/styles/globals.css";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Footer />
        <TanStackRouterDevtools position="bottom-right" />
        <Toaster />
      </AuthProvider>
    </>
  );
}
