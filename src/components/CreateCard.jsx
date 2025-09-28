import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router-dom";

const CreateCard = () => {
    return (
        <NavLink to="/create" className="cursor-pointer flex flex-col gap-2 items-center border-2 border-dashed border-gray-700 p-10 bg-[#202434] rounded-lg duration-300 hover:-translate-y-1">
            <Icon
                icon="ph:user-circle-plus-fill"
                className="w-20 h-20 text-white"
            />
            <p className="font-bold text-white text-xl">Create New Contact</p>
            <p className="text-gray-400">Add a new contact to your list</p>
        </NavLink>
    );
};

export default CreateCard;
