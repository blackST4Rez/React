import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">
      <Card user='Raka' age={23} skill='React Developer' profile='https://plus.unsplash.com/premium_vector-1773996168561-1b6840ba4123?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fERKWTg2Tjk4STBjfHxlbnwwfHx8fHw%3D'/>
      <Card user='Sofia' age={24}  skill='Java Developer' profile='https://images.unsplash.com/vector-1745159143245-d9b0ac560834?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fERKWTg2Tjk4STBjfHxlbnwwfHx8fHw%3D'/>
      <Card user='Rebeca' age={43} skill='Data Analyst' profile='https://images.unsplash.com/vector-1745158852219-2c46b8db2358?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQwfERKWTg2Tjk4STBjfHxlbnwwfHx8fHw%3D'/>
      <Card user='John' age={33} skill='QA Engineer' profile='https://images.unsplash.com/vector-1750073030529-8454fe28d27f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fERKWTg2Tjk4STBjfHxlbnwwfHx8fHw%3D'/>
    </div>
  )
}

export default App