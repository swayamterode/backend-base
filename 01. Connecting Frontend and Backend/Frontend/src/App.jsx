import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get("/api/jokes").then((res) => {
      console.log(res.data);
      setJokes(res.data);
    });
  }, []);
  return (
    <>
      <h1>Jokes</h1>
      {jokes.map((data) => {
        return (
          <div key={data.id}>
            <h3>{data.joke}</h3>
            <p>{data.punchline}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
