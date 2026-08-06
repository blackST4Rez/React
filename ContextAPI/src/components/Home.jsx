import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home() {

    const { login, logout, user } = useContext(UserContext);

    return (

        <div>

            <button onClick={login}>
                Login as Emma
            </button>

            <button onClick={logout}>
                Logout
            </button>

            <p>

                Current User:

                {user
                    ? user.name
                    : "Nobody"}

            </p>

        </div>

    );

}

export default Home;