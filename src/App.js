import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
  });

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="app">
        <div className="card">
          <h3 className="heading">{advice}</h3>
          <button className="button" onClick={fetchAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
