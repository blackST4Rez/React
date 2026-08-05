import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchUsers() {

            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const data = await response.json();
            
            console.log(data);
          
            setUsers(data);

            setLoading(false);

        }

        fetchUsers();

    }, []);

    if (loading) {
        return (
            <h1>Loading...</h1>
        );
    }

    return (
        <div className="p-6">

            <h1 className="text-3xl font-bold mb-6">
                Users
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {users.map((user) => (

                    <div
                        key={user.id}
                        className="border rounded-lg shadow-md p-4"
                    >

                        <h2 className="text-xl font-bold">
                            {user.name}
                        </h2>

                        <p>📧 {user.email}</p>

                        <p>📞 {user.phone}</p>

                        <p>🌐 {user.website}</p>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default App;