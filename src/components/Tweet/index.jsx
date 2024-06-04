import PropTypes from "prop-types";
import { FaHeart } from "react-icons/fa";
import { LiaRetweetSolid } from "react-icons/lia";
import styles from "./Tweet.module.css";

function Tweet({ tweet, removeTweet}) {
  return (
    <div className={styles.container}>
      <div>{tweet.username}</div>
      <div>{tweet.content}</div>
      <div>
        <div>
          <FaHeart color="red"/> {tweet.likes}
        </div>
        <div>
          <LiaRetweetSolid size={22} /> {tweet.retweets}
        </div>
      </div>
      <div>
        <button onClick={() => removeTweet(tweet.id)}>Delete</button>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
};

export default Tweet;






