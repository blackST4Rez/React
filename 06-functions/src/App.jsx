
const App = () => {

  /* Named Function 
    function handleClick() {
        console.log('Button was clicked!');
        alert('Hello World!');
    } */
  
  /* Named Inline Function
    function handleClick(message) {
        console.log(message);
        alert(message);
    } */
  
  /* Arrow Function
      /* const handleClick = () => {
      console.log('Button was clicked!');
    }; */
  
  /* Inline Arrow Function
  const handleClick = (message) => {
        console.log(message);
    }; */
    
    return (
      {/* <button onClick={handleClick('Raka Maharjan')}>
            Click Me
      </button> */}

      /* For Inline Arrow Function
      <button onClick={() => handleClick('Raka Maharjan')}>
            Click Me
      </button> */
      
    )
}

export default App

/* We can write  () => before function with paramete if we dont wanna run it immediately */