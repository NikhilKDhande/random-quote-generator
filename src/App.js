import React, { useState, useEffect } from "react";
import Quote from "./Quote";
const url = "https://type.fit/api/quotes";

function App() {
  const [quote, setQuote] = useState([]);

  const fetchUrl = async () => {
    const responce = await fetch(url);
    const data = await responce.json();
    const randomNum = Math.floor(Math.random() * data.length);
    const newQuote = data[randomNum];
    setQuote(newQuote);
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  const changeQuote = (e) => {
    e.preventDefault();
    fetchUrl();
  };

  return (
    <main id="quote-box">
      <Quote {...quote} handleChange={changeQuote} />
    </main>
  );
}

export default App;
