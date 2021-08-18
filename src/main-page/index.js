import { useEffect, useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './main-page.css';
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-results.js";
import HouseFilter from "./house-filter";

function App() {
  
  // state is private data for the component that survives re-render
  // props can be used to pass on state to other components but the state object is interal to the component
  // we call the useState function and pass it the intital value, in the case an empty array of houses
  // the state function returns an array containing two items
  // the first is a variable that will reflect the current value of the state
  // and the second is a function to set it
  const [allHouses, setAllHouses] = useState([])

  // useEffect allows us to create side effects when the state of a component changes
  // as the first parameter we call enother function that fetches the data file
  // the second is letting it know when to execute the provided function, could be an array of values
  // anytime when these values change the function is executed
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

  // we want to determine a featuredHouse and not change it on every re-render, so we cache it with useMemo()
  // just like useEffect(), it uses a function as a first parameter that has to return a value
  // an array of values to keep track of as a second parameter [allHouses] that waits for it to change
  // in this case it will change when its first loaded into state and second when the houses are loaded
  // when the values re-render outside of this condition, it will be loaded from cache
  // keeping our featured house from changing too often
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex]
    }
  }, [allHouses])
  

  // a page in a single-page app isn't a page where the browser can redirect to by using the server
  // all the UI is in the browser, but we ALSO want to use the browsers history so a user can use the back button
  // This is where react-router-dom comes into play, which must be installed seperately
  // below a new Router component that alaways has to be displayed no matter what the url in the browser is
  // a Bootstrap container div, and rendering the Header comp passing a subtitle
  // Switch will check the child Route comp. to see if theres a match bewtween the actual URL and the Route path 
  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// Routing order matters, top-down, and partial matches are accepted as well
// partial matches can be over-rulled by using the exact path,or swithc their posistion


export default App;
