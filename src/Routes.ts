import { useRoutes } from "react-router-dom";
import { AuthRoutes } from "./features/auth/routes";

export const appRoutes = [...AuthRoutes];

export function AppRouter() {
  const routing = useRoutes(appRoutes);
  return routing;
}
