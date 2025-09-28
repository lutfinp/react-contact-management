import { Icon } from "@iconify/react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { alertError, alertSucces } from "../lib/alert";
import { userRegister } from "../lib/api/UserApi";

const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password != confirmPassword) {
            await alertError("Password not match");
            return;
        }

        const response = await userRegister({
            username: username,
            password: password,
            name: name,
        });
        const responseBody = await response.json();

        if (response.status === 200) {
            await alertSucces("User created Succesfully");
            await navigate({
                pathname:"/login"
            })
        } else{
            await alertError(responseBody.errors)
        }
    };

    return (
        <div className="flex justify-self-center border w-120 items-center border-gray-700 rounded-lg px-8 py-5 flex-col bg-[#202434] gap-1">
            <Icon
                icon="ph:user-circle-plus-fill"
                className="w-20 h-20 text-white"
            />
            <h1 className="text-white text-3xl font-bold">
                Contact Management
            </h1>
            <h3 className="text-lg text-gray-400 mb-3">Create a new account</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full mb-2">
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
                    placeholder="Choose a username"
                    className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <label
                    htmlFor="full_name"
                    className="text-gray-300 font-semibold"
                >
                    Full Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="full_name"
                    placeholder="Enter your full name"
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
                    type="password"
                    id="password"
                    placeholder="Create a password"
                    className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <label
                    htmlFor="confrim_password"
                    className="text-gray-300 font-semibold"
                >
                    Confirm Password
                </label>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    id="confrim_password"
                    placeholder="Confirm your password"
                    className="mb-4 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <button
                    className="flex flex-row gap-2 items-center text-center justify-center bg-[#203c8c] text-white font-bold p-2 rounded-lg cursor-pointer hover:bg-[#203c9c]"
                >
                    <Icon icon="fa6-solid:user-plus" className="w-5 h-8" />
                    <p>Register</p>
                </button>
            </form>
            <div className="flex flex-row font-semibold gap-1">
                <p className="text-gray-400 ">Already have an account?</p>
                <NavLink
                    to="/login"
                    className="text-[#6da2d4] hover:text-[#9fbbed]"
                >
                    Sign in
                </NavLink>
            </div>
        </div>
    );
};

export default RegisterForm;
