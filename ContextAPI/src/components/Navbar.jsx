import { useContext } from "react";
import UserContext from "../context/UserContext";

function Navbar() {

    const { user } = useContext(UserContext);

    return (

        <nav>

            {user
                ? `Welcome ${user.name}`
                : "Please Login"}

        </nav>

    );

}

export default Navbar;