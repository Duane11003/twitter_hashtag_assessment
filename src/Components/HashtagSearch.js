import React, { useState, useEffect } from "react";
import Results from "../Components/Results";

function HashtagSearch() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const reset = () => setInputError(false);

  const handleClick = () => {
    if (!input) {
      setInputError(true);
    }
    setLoading(true);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        mode: "no-cors",
      },
      body: JSON.stringify({
        "#": { input },
      }),
    };
    fetch("http://localhost:3000/search", options)
      .then((res) => res.json())
      .then((res) => {
        setTweets(res);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        console.warn(err);
        setLoading(false);
      });
    setInput("");
    console.log(tweets)
  };

  if (error) return <p>Error fetching tweets</p>;
  if (loading) return <p>Loading...</p>;
  if (inputError) {
    return (
      <div>
        <p>Input can't be blank</p>
        <button onClick={reset}>Go Back</button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="#"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClick}>Click</button>
      <Results tweets={tweets} />
    </div>
  );
}

export default HashtagSearch;
