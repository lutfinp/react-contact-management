import { Icon } from "@iconify/react/dist/iconify.js";

const Header = ({ title, icon }) => {
    return (
        <div className="flex flex-row gap-3 items-center">
            <Icon icon={icon} className="w-10 h-6 text-[#5ba5fe]" />
            <h1 className="text-white text-2xl font-bold">{title}</h1>
        </div>
    );
};

export default Header;
