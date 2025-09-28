import { Icon } from "@iconify/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { userLogout } from "../lib/api/UserApi";
import { alertError } from "../lib/alert";

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useLocalStorage("token", "");

    const handleLogout = async () => {
        const response = await userLogout(token);
        const responseBody = await response.json();

        if (response.status === 200) {
            setToken("");
            await navigate({
                pathname: "/login",
            });
        } else {
            await alertError(responseBody.errors);
        }
    };

    return (
        <div className="py-5 pl-2 pr-4 bg-[#1c3ca4] text-white">
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-2 items-center">
                    <Icon icon="fa6-solid:address-book" className="w-10 h-6" />
                    <NavLink to="/" className="text-white text-xl font-bold">
                        <h1>Contact Management</h1>
                    </NavLink>
                </div>
                <div className="flex flex-row gap-5 items-center">
                    <NavLink
                        to="/profile"
                        className="flex flex-row gap-2 items-center"
                    >
                        <Icon
                            icon="fa6-solid:circle-user"
                            className="w-5 h-5"
                        />
                        <p className="text-white">Profile</p>
                    </NavLink>
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer flex flex-row gap-2 items-center"
                    >
                        <Icon
                            icon="fa6-solid:arrow-right-from-bracket"
                            className="w-5 h-5"
                        />
                        <p className="text-white">Logout</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
