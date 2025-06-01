import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      //this /api/jokes is comming from backend.
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div>
        <h1>Momo and fullstack.</h1>
        <p>Jokes: {jokes.length}</p>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h1>{joke.title}</h1>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
