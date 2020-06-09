import React, { useState } from "react";
import Button from "../Styles/Button";
import Input from "../Styles/Input";
import SingleTweet from '../Components/SingleTweet'

function HashtagSearch() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const reset = () => setInputError(false);
  const errorReset = () => setError(false);

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
    console.log(tweets);
  };

  if (error) {
    return (
      <div>
        <p>Error fetching tweets</p>
        <Button onClick={errorReset}>Reset</Button>
      </div>
    );
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

  console.log(tweets)

  return (
    <div>
      <Input
        type="text"
        placeholder="Search by hashtag"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></Input>
      <Button onClick={handleClick}>Click</Button>
      <SingleTweet tweets={tweets} />

    </div>
  );
}

export default HashtagSearch;
