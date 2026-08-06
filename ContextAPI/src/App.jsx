import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";

function App() {

    const [user, setUser] = useState({
        name: "Raka",
        email: "raka@gmail.com",
        role: "Frontend Intern"
    });

    function logout() {
        setUser(null);
    }

    function login() {
        setUser({
            name: "Emma",
            email: "emma@gmail.com",
            role: "Frontend Intern"
        });
    }

    return (

        <UserContext.Provider value={{ user, login, logout }}>

            <Navbar />

            <Home />

            <Profile />

        </UserContext.Provider>

    );

}

export default App;