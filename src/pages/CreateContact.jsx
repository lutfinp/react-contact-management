import CreateForm from "../components/CreateForm";
import Header from "../components/Header";

const CreateContact = () => {
    return (
        <div className="bg-[#161d2d] py-7 px-2 h-screen flex flex-col gap-7">
            <Header title="Create Contact" icon="fa6-solid:users" />
            <div className="items-center">
                <CreateForm />
            </div>
        </div>
    );
};

export default CreateContact;