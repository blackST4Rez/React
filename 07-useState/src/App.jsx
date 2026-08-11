import { useState } from "react"


const App = () => {

  const [users, setUsers] = useState({
    name: '',
    age: 0,
    email: ''
  })

  const handleChange = () => {
    setUsers({...users, name: 'Raka', age: 23, email: 'raka123@gmail.com'})
  }

  return (
    <div>
        <input value={users.name}  />
        <input value={users.email} />
        <input value={users.age} />
        <button onClick={handleChange} >Toggle</button>
      </div>
  )
}

export default App