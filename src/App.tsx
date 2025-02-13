import { Routes, Route } from "react-router";
import Navbar from "./shared/components/Layout/Navbar";
import Footer from "./shared/components/Layout/Footer";
import Home from "./modules/user/pages/Home";
import Users from "./modules/user/pages/Users";
import UserDetail from "./modules/user/pages/UserDetail";
import CreateUser from "./modules/user/pages/CreateUser";
import "./styles/App.css";

function App() {
    return (
        <>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/users/:id" element={<UserDetail />} />
                    <Route path="/create-user" element={<CreateUser />} />
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
