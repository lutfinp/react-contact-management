import { useState } from "react";
import { useLocalStorage } from "react-use";
import { alertError, alertSucces } from "../lib/alert";
import { contactCreate } from "../lib/api/ContactAPI";
import { NavLink, useNavigate } from "react-router-dom";

const CreateForm = () => {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [token, _] = useLocalStorage("token", "");

    const handleSubmit = async () => {
        const response = await contactCreate({
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            token,
        });
        const responseBody = await response.json();

        if (response.status === 200) {
            alertSucces("Contact Create Success");
            navigate({
                pathname: "/",
            });
        } else {
            alertError(responseBody.errors);
        }
    };

    return (
        <div className="flex justify-self-center border w-170 items-center border-gray-700 rounded-lg px-8 py-5 bg-[#202434]">
            <div className="flex flex-col gap-1 w-full mb-2">
                <div className="flex gap-2">
                    <div className="flex flex-col gap-1 w-full mb-2">
                        <label
                            htmlFor="first_name"
                            className="text-gray-300 font-semibold"
                        >
                            First Name
                        </label>
                        <input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            id="first_name"
                            placeholder="Enter first name"
                            className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full mb-2">
                        <label
                            htmlFor="last_name"
                            className="text-gray-300 font-semibold"
                        >
                            Last Name
                        </label>
                        <input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            type="text"
                            id="last_name"
                            placeholder="Enter last name"
                            className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                        />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-1 w-full mb-2">
                        <label
                            htmlFor="email"
                            className="text-gray-300 font-semibold"
                        >
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            id="email"
                            placeholder="Enter email"
                            className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-1 w-full mb-2">
                        <label
                            htmlFor="phone"
                            className="text-gray-300 font-semibold"
                        >
                            Phone
                        </label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            id="phone"
                            placeholder="Enter phone"
                            className="h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <NavLink to="/" className="w-fit flex gap-2 items-center bg-[#ec4038] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#d63a3b]">
                        <p>Cancel</p>
                    </NavLink>
                    <button
                        onClick={handleSubmit}
                        className="w-fit flex gap-2 items-center bg-[#203c8c] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#203c9c]"
                    >
                        <p>Create Contact</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;
