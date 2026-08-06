import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) {

        return <h2>No User Logged In</h2>;

    }

    return (

        <div>

            <h2>{user.name}</h2>

            <p>{user.email}</p>

            <p>{user.role}</p>

        </div>

    );

}

export default Profile;