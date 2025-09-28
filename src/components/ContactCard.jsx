import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { deleteContact, getContact } from "../lib/api/ContactAPI";
import { useLocalStorage } from "react-use";
import { alertError, alertSucces } from "../lib/alert";

const ContactCard = () => {
    const [data, setData] = useState([]);
    const [token, _] = useLocalStorage("token", "");

    const handleDelete = async (id) => {
        const response = await deleteContact({ id, token });
        const responseBody = await response.json();
        if (response.status === 200) {
            alertSucces("Data Deleted Succesfully");
        } else {
            alertError(responseBody.errors);
        }
    };

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await getContact({ token });
                const responseBody = await response.json();

                if (response.status !== 200) {
                    await alertError(responseBody.errors);
                } else {
                    setData(responseBody.data);
                }
            } catch (error) {
                console.log(error)
                await alertError("Failed to fetch contacts");
            }
        };

        if (token) {
            getData();
        }
    }, [token]);

    return data.map((dataContact, index) => (
        <div
            key={index}
            className="flex flex-col gap-2 border border-gray-700 py-4 px-6 bg-[#202434] rounded-lg duration-300 hover:-translate-y-1"
        >
            <NavLink className="p-2 hover:bg-[#404454] rounded-lg flex flex-col gap-2 cursor-pointer">
                <div className="flex gap-2 items-center">
                    <Icon
                        icon="fa6-solid:user-large"
                        className="w-6 h-6 text-white"
                    />
                    <p className="font-bold text-white text-xl">
                        {dataContact.first_name} {dataContact.last_name}
                    </p>
                </div>
                <div className="flex gap-2 items-center ml-1">
                    <Icon
                        icon="fa6-solid:user-tag"
                        className="w-5 h-5 text-gray-600"
                    />
                    <p className="text-gray-300">
                        First Name: {dataContact.first_name}
                    </p>
                </div>
                <div className="flex gap-2 items-center ml-1">
                    <Icon
                        icon="fa6-solid:user-tag"
                        className="w-5 h-5 text-gray-600"
                    />
                    <p className="text-gray-300">
                        Last Name: {dataContact.last_name}
                    </p>
                </div>
                <div className="flex gap-2 items-center ml-1">
                    <Icon
                        icon="fa6-solid:envelope"
                        className="w-5 h-5 text-gray-600"
                    />
                    <p className="text-gray-300">Email: {dataContact.email}</p>
                </div>
                <div className="flex gap-2 items-center ml-1">
                    <Icon
                        icon="fa6-solid:phone"
                        className="w-5 h-5 text-gray-600"
                    />
                    <p className="text-gray-300">Phone: {dataContact.phone}</p>
                </div>
            </NavLink>
            <div className="flex justify-end gap-3">
                <NavLink
                    to={`/edit/${dataContact.id}`}
                    className="w-fit flex gap-2 items-center bg-[#203c8c] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#203c9c]"
                >
                    <Icon icon="fa6-solid:pen-to-square" className="w-4 h-6" />
                    <p>Edit</p>
                </NavLink>
                <button onClick={() => handleDelete(dataContact.id)} className="w-fit flex gap-2 items-center bg-[#ec4038] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#d63a3b]">
                    <Icon icon="fa6-solid:trash-can" className="w-4 h-6" />
                    <p>Delete</p>
                </button>
            </div>
        </div>
    ));
};

export default ContactCard;
