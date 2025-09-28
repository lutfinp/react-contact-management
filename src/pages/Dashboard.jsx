import ContactCard from "../components/ContactCard";
import CreateCard from "../components/CreateCard";
import Header from "../components/Header";
import SearchContact from "../components/SearchContact";

const Dashboard = () => {
    return (
        <div className="bg-[#161d2d] py-7 px-2 h-screen flex flex-col gap-7">
            <Header title="My Contacts" icon="fa6-solid:users" />
            <SearchContact />
            <div className="grid grid-cols-3 gap-4">
                <CreateCard />
                <ContactCard />
            </div>
        </div>
    );
};

export default Dashboard;
