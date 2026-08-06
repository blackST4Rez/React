import { useEffect, useRef } from "react";

function Login() {

    const inputRef = useRef(null);

    useEffect(() => {

        inputRef.current.focus();

    }, []);

    return (

        <div>

            <h2>Login</h2>

            <input
                type="text"
                placeholder="Enter Username"
                ref={inputRef}
            />

        </div>

    );

}

export default Login;