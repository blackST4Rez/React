import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers(){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      console.log(data);
      
      setUsers(data);
    }
    getUsers();
  }, [])
  

  return (
    <div>
      <h3>Users</h3>

      {users.map((user) => (
        <div key={user.id} className="border rounded-lg p-4 shadow-md mb-4">

          <h2 className="text-xl font-bold">
              {user.name}
          </h2>

          <p>
            {user.email}
          </p>

          <p>
            {user.website}
          </p>

        </div>
        
      ))}

    </div>
  )
}

export default App