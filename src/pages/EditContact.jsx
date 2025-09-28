import EditForm from "../components/EditForm";
import Header from "../components/Header";

const EditContact = () => {
    return (
        <div className="bg-[#161d2d] py-7 px-2 h-screen flex flex-col gap-7">
            <Header title="Edit Contact" icon="fa6-solid:users" />
            <div className="items-center">
                <EditForm />
            </div>
        </div>
    );
};

export default EditContact;
