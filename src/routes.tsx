import { createBrowserRouter } from "react-router-dom";
import { Login } from "./Pages/login/Login";
import { Dashboard} from "./Pages/dashboard/Dashboard";
import { DashboardLayout } from "./components/DashboardLayout";
import { Integrations } from "./Pages/integrations/Integrations";

export const router  =  createBrowserRouter([

{
    path: "/",
    element: <Login/>
},
{
    path: "/dashboard",
    element: <DashboardLayout Component={Dashboard} />
},
{
    path: "/integrations",
    element: <DashboardLayout Component={Integrations}/>
},
]);