import { Divider } from "antd";
import { CardComp } from "../../components/CardComp";
import WebhookOutlinedIcon from '@mui/icons-material/WebhookOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import AirplanemodeInactiveOutlinedIcon from '@mui/icons-material/AirplanemodeInactiveOutlined';

export const Dashboard = () => {
    return (
        <div>
        <div className=" text-black font-semibold text-[20px]">
        Overview
    </div>
    <Divider className=" bg-purple "/>
    <div className="grid gap-3 items-center justify-center grid-cols-1 md:grid-cols-3">
        <CardComp text={"This month"} Icon={WebhookOutlinedIcon} number={15}  title='Total Number of APIs'/>
        <CardComp text={"This month"} Icon={AirplanemodeActiveOutlinedIcon} number={6}  title='Active APIs'/>
        <CardComp text={"This month"} Icon={AirplanemodeInactiveOutlinedIcon} number={9}  title='Deactivated APIs'/>
        
    </div>

        
        </div>
    );
};
