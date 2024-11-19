
type sidebarItemProps = {
    Icon: React.FC;
    text: string;
};

function SidebarItem({ Icon , text}: sidebarItemProps) {
    return (
        <div>
            <div
                className={`self-left items-center space-x-2 flex mb-3 px-5 py-3 text-[0px] rounded-md  ${decodeURIComponent(location.pathname) === `/${text}` ||
                        decodeURIComponent(location.pathname).includes(`${text}`)
                        ? "bg-orange text-white md:bg-orange text-transparent"
                        : ""
                    }`}
            >
                <Icon />
            
                    <h1 className=" capitalize md:capitalize">{text}</h1>

            </div>
        </div>
    );
}

export default SidebarItem;
