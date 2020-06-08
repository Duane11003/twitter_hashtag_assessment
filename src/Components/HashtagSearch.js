import React, { useState, useEffect } from "react";
import Results from "../Components/Results";
import Button from '../Styles/Button'

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

  if (error) {
    return (
      <div>
        <p>Error fetching tweets</p>
        <Button onClick={reset}>Reset</Button>
      </div>
    )
  }
  if (loading) return <p>Loading...</p>;
  if (inputError) {
    return (
      <div>
        <p>Input can't be blank</p>
        <Button onClick={reset}>Go Back</Button>
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
      <Button onClick={handleClick}>Click</Button>
      <Results tweets={tweets} />
    </div>
  );
}

export default HashtagSearch;
