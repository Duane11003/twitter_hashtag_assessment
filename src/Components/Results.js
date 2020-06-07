import React from "react";

function Results({ tweets }) {
  const mappedTweets = tweets.map(({ id, user, text }) => {
    return (
      <li key={id}>
        <img src={user.profile_image_url}></img>
        <h3>{user.name}</h3>
        <p>{text}</p>
      </li>
    );
  });
  return (
    <div>
      <ul>{mappedTweets}</ul>
    </div>
  );
}

export default Results;
