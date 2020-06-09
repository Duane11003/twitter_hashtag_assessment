import React from "react";
import Div from "../Styles/Div";

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
    <Div>
      <ul>{mappedTweets}</ul>
    </Div>
  );
}

export default Results;
