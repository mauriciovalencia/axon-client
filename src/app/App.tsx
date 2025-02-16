import Navbar from "../shared/components/Layout/Navbar.tsx";
import Footer from "../shared/components/Layout/Footer.tsx";
import "../styles/App.css";
import {Route, Routes} from "react-router";
import Home from "../modules/user/pages/Home.tsx";
import Users from "../modules/user/pages/Users.tsx";
import UserDetail from "../modules/user/pages/UserDetail.tsx";
import CreateUser from "../modules/user/pages/CreateUser.tsx";

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
