import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import EditContact from "./pages/EditContact";
import CreateContact from "./pages/CreateContact";
import Profile from "./pages/Profile";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="edit/:id" element={<EditContact />} />
                    <Route path="create" element={<CreateContact />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
};

export default App;
