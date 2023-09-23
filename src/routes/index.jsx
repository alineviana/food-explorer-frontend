import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AdminRoutes } from "./admin.routes";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();
 
  return (
    <BrowserRouter>
     {  user ? (user.Admin ? <AdminRoutes /> : <AppRoutes />) : <AuthRoutes /> }
    </BrowserRouter>
  );
}