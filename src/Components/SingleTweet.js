import React, { Fragment } from "react";

const SingleTweet = ({ tweets }) => {
  console.log(tweets);
  const mappedTweets = tweets.map(({ id, text, user }) => {
    return (
      <div className="tweet-container" key={id}>
        <div>
          <img className='profile-banner' src={user.profile_banner_url}></img>
          <h1>{user.screename}</h1>
          <h3>{user.name}</h3>
          <p>{text}</p>
          <img src={user.profile_image_url}></img>
        </div>
      </div>
    );
  });
  return <Fragment>{mappedTweets}</Fragment>;
};

export default SingleTweet;
