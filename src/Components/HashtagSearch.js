import React, { useState, useEffect } from "react";

function HashtagSearch() {
  const [input, setInput] = useState("");
  const [tweets, setTweets] = useState([]);

  const handleClick = () => {
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
      .then((res) => setTweets(res));
    setInput("");
    console.log(tweets, "is the updated state");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="#"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default HashtagSearch;
