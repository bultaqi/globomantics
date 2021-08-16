import { useEffect, useState, useMemo } from "react";
import logo from './logo.svg';
import './main-page.css';
import Header from "./header";

function App() {
  
  // state is private data for the component that survives rerender
  // props can be used to pass on state to other components but the state object is interal to the component
  // we call the useState function and pass it the intital value, in the case an empty array of houses
  // the state function returns an array containing two items
  // the first is a variable that will reflect the current value of the state
  // and the second is a function to set it
  const [allHouses, setAllHouses] = useState([])

  // useEffect allows us to create side effects when the state of a component changes
  // useEffect is a function
  // as the first parameter we call enother function that fetches the data file
  // the second is letting it know when to execute the provided function, an array of values
  // anytime when the these values changes the function is executes
  // leaving the array empty, the function will only run the first time the component renders 
  useEffect(()=> {
    // an asynchronous function fetches the object and puts it into json, which is an array of houses
    const fetchHouses = async () => {
      const response = await fetch("/houses.json");
      const houses = await response.json();
      // we call setAllHouses and set it to state when they're all fetched
      setAllHouses(houses)
    };
    fetchHouses();
  }, []);


  // when the component renders allHouses will be an empty array
  // useEffect will still fire because ITS empty array in its second parameter will render once
  // the houses are being loaded asynchously, so as they are being gathered, the other code is being executed
  // that allows for the yet to be determined featured house to be empty
  // once the state is set, it causes a rerender and the if statement below is executed
  let featuredHouse = {};
  if (allHouses.length) {
    const randomIndex = Math.floor(Math.random() * allHouses.length);
    featuredHouse = allHouses[randomIndex]
  }


  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" 
      />
    </div>
  );
}

export default App;
