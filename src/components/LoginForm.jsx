import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userLogin } from "../lib/api/UserApi";
import { alertError } from "../lib/alert";
import { useLocalStorage } from "react-use";

const LoginForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setToken] = useLocalStorage("token", "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await userLogin({
            username: username,
            password: password,
        });
        const responseBody = await response.json();

        if (response.status === 200) {
            const token = responseBody.data.token;
            setToken(token);
            await navigate({
                pathname: "/",
            });
        } else {
            await alertError(responseBody.errors);
        }
    };

    return (
        <div className="flex justify-self-center border w-120 items-center border-gray-700 rounded-lg px-8 py-5 flex-col bg-[#202434] gap-1">
            <Icon
                icon="fa6-solid:address-book"
                className="w-10 h-10 text-white"
            />
            <h1 className="text-white text-3xl font-bold">
                Contact Management
            </h1>
            <h3 className="text-lg text-gray-400 mb-3">
                Sign in to your account
            </h3>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 w-full mb-2"
            >
                <label
                    htmlFor="username"
                    className="text-gray-300 font-semibold"
                >
                    Username
                </label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <label
                    htmlFor="password"
                    className="text-gray-300 font-semibold"
                >
                    Password
                </label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    id="password"
                    placeholder="Enter your password"
                    className="mb-3 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <button className="flex flex-row gap-2 items-center text-center justify-center bg-[#203c8c] text-white font-bold p-2 rounded-lg cursor-pointer hover:bg-[#203c9c]">
                    <Icon
                        icon="fa6-solid:arrow-right-to-bracket"
                        className="w-5 h-8"
                    />
                    <p>Sign In</p>
                </button>
            </form>
            <div className="flex flex-row font-semibold gap-1">
                <p className="text-gray-400 ">Not have an account?</p>
                <NavLink
                    to="/register"
                    className="text-[#6da2d4] hover:text-[#9fbbed]"
                >
                    Sign up
                </NavLink>
            </div>
        </div>
    );
};

export default LoginForm;
