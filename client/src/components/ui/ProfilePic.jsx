import React from "react";
import stringToGradient from "../../lib/stringToGradients.js";
import styles from "../../styles/ProfileImage.module.css";

const ProfilePic = (props) => {
  return (
    <div
      className={`${styles.avatar} ${props.className ? props.className : ""}`}
      style={{
        backgroundImage: `url(${props.image}), ${stringToGradient(props.name)}`,
      }}>
      {!props.image && (
        <svg className={styles.letterPlaceholder} viewBox="0 0 60 60">
          <text x="50%" y="52%" textAnchor="middle" alignmentBaseline="middle">
            {Array.from(props.name)[0].toUpperCase()}
          </text>
        </svg>
      )}
    </div>
  );
};

export default ProfilePic;
