import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Clock } from "./components/clock";
import { Counter } from "./components/counter";
import UseCaseLiveFilter from "./components/liveFilter";
// import UseCaseAnimation from "./components/cartEffect";
import UseCaseUpdateFetch from "./components/useCaseUpdateFetch";
import UseCaseUpdateApi from "./components/UseCaseUpdateApi";

function App() {
  // the first argument useEffect takes is a function

  // The function gets called after every render of the
  // component that its in.

  // If you pass an array in as the 2nd argument
  // whenever a value in the array changes it will trigger
  // the function passed in to run again.

  // To make it run only when it mounts you can pass
  // an empty array.

  useEffect(() => {
    window.alert("code ryna");
  }, []);

  const [count, setCount] = useState(0);

  return <>{/* <UseCaseUpdateApi /> */}</>;
}

export default App;

// {
//   {/* <Clock /> */}
//   <h1>Code Ryan</h1>
//   <p>The count is {count}</p>
//   {/* when the count gets to 10 its not going to render Counter
//   and clear the interval */}
//   {count < 10 && <Counter setCount={setCount} />}
// }
