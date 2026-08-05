import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [posts, setPosts] = useState([]);

  const getData = async () => {
        
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    
  
    setPosts(data);
    
  }
  
  useEffect(() => {
    console.log('Effect is running...');
    
    getData;
  }, [])
  

  return (
    <div className="h-screen w-screen bg-gray-900 text-3xl text-white ">

      <button className="w-50px h-auto rounded-l border-4 p-8px" onClick={getData} >Get</button>

      <h1>Users</h1>
      {posts.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}

    </div>
  )
}

export default App