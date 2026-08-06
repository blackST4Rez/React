import useFetch from "./hooks/useFetch";

function App() {

    const users = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (

        <div>

            {users.map(user => (

                <h2 key={user.id}>
                    {user.name}
                </h2>

            ))}

        </div>

    );

}

export default App;