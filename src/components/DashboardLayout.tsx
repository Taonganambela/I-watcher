import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import { Tooltip } from "antd";

type DashboardLayoutProps = {
    Component: React.ComponentType;
};

export const DashboardLayout = ({ Component }: DashboardLayoutProps) => {
    return (
        <div className="flex">

        <div className="">
            <div className="h-screen bg-blue text-white fixed">
    <div className="text-xl font-semibold text-center flex-col">
        <div className="flex items-center justify-center"></div>
        <div className="mt-3">Watch.io</div>
    </div>

    <div className="px-10 mt-3">
        <Tooltip title="Overview" placement="right" color="blue" className="font-bold">
            <Link to="/dashboard">
                <SidebarItem Icon={GridViewOutlinedIcon} text="dashboard" />
            </Link>
        </Tooltip>
        <Tooltip title="Integrations" placement="right" color="blue" className="font-bold">
            <Link to="/integrations">
                <SidebarItem Icon={IntegrationInstructionsOutlinedIcon} text="Integrations" />
            </Link>
        </Tooltip>
    
        <div className="absolute bottom-0">
            <Tooltip title="Logout" placement="right" color="blue" className="font-bold">
                <Link to="/">
                    <SidebarItem Icon={ExitToAppOutlinedIcon} text="Logout" />
                </Link>
            </Tooltip>
        </div>
    </div>
</div>
        </div>

<div className="ml-[150px] w-full p-4">
    <Component />
</div>

        </div>
    );
};
