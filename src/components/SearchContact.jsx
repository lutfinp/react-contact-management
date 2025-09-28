import { Icon } from "@iconify/react/dist/iconify.js";

const SearchContact = () => {
    return (
        <div className="p-4 flex flex-col gap-3 border border-gray-700 rounded-lg bg-[#202434]">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <Icon
                        icon="fa6-solid:magnifying-glass"
                        className="w-7 h-4 text-[#5ba5fe]"
                    />
                    <p className="font-bold text-white text-xl">
                        Search Contacts
                    </p>
                </div>
                <button className="cursor-pointer">
                    <Icon
                        icon="fa6-solid:angle-up"
                        className="w-10 h-6 text-gray-300"
                    />
                </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="name"
                        className="text-gray-300 font-semibold"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Search by name"
                        className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="username"
                        className="text-gray-300 font-semibold"
                    >
                        Email
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Search by email"
                        className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="phone"
                        className="text-gray-300 font-semibold"
                    >
                        Phone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Search by phone"
                        className="mb-2 h-12 bg-[#303444] px-4 text-white placeholder:text-gray-400 border border-gray-600 rounded-lg"
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <button className="w-fit flex gap-2 items-center bg-[#203c8c] text-white font-semibold py-2 px-5 rounded-lg cursor-pointer hover:bg-[#203c9c]">
                    <Icon icon="fa6-solid:magnifying-glass" className="w-4 h-6" />
                    <p>Search</p>
                </button>
            </div>
        </div>
    );
};

export default SearchContact;
