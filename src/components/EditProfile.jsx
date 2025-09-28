import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import {
    userCurrent,
    userUpdateName,
    userUpdatePassword,
} from "../lib/api/UserApi";
import { alertError, alertSucces } from "../lib/alert";

const EditProfile = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [token, _] = useLocalStorage("token", "");

    const handleUpdateName = async () => {
        const response = await userUpdateName(token, { name });
        const responseBody = await response.json();

        if (response.status === 200) {
            alertSucces("Update Name Success");
        } else {
            alertError(responseBody.errors);
        }
    };

    const handleUpdatePassword = async () => {
        if (password == confirmPassword) {
            const response = await userUpdatePassword(token, { password });
            const responseBody = await response.json();
            if (response.status === 200) {
                alertSucces("Update Password Success");
            } else {
                alertError(responseBody.errors);
            }
        } else {
            alertError("Password Invalid");
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            const response = await userCurrent(token);
            const responseBody = await response.json();
            setName(responseBody.data.name);
        };
        if (token) {
            getProfile();
        }
    }, [token]);

    return (
        <div className="flex gap-7">
            <div className="flex flex-col gap-3 border w-170 border-gray-700 rounded-lg px-8 py-5 bg-[#202434]">
                <p className="font-bold text-xl text-white">Edit Profile</p>
                <label
                    htmlFor="full_name"
                    className="text-gray-300 font-semibold"
                >
                    Full name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="full_name"
                    placeholder="Enter full name"
                    className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <button
                    onClick={handleUpdateName}
                    className="w-full bg-[#203c8c] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#203c9c]"
                >
                    <p className="flex items-center justify-center">
                        Update Profile
                    </p>
                </button>
            </div>
            <div className="flex flex-col gap-3 border w-170 border-gray-700 rounded-lg px-8 py-5 bg-[#202434]">
                <p className="font-bold text-xl text-white">Change Password</p>
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
                    placeholder="Enter password"
                    className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <label
                    htmlFor="confirm_password"
                    className="text-gray-300 font-semibold"
                >
                    Confirm Password
                </label>
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    id="confirm_password"
                    placeholder="Enter password"
                    className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                />
                <button
                    onClick={handleUpdatePassword}
                    className="w-full bg-[#203c8c] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#203c9c]"
                >
                    <p className="flex items-center justify-center">
                        Update Password
                    </p>
                </button>
            </div>
        </div>
    );
};

export default EditProfile;
