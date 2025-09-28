import EditProfile from "../components/EditProfile";
import Header from "../components/Header";

const Profile = () => {
    return (
        <div className="bg-[#161d2d] h-screen flex flex-col py-7 px-2 gap-6">
            <Header title="My Profile" icon="fa6-solid:users" />
            <div className="justify-center flex">
                <EditProfile />
            </div>
        </div>
    );
};

export default Profile;
