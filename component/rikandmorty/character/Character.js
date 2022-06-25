import React from "react";
import styles from "../style.module.css";

const Character = ({ character }) => {
  return (
    <div className={styles.card}>
      <img src={character.image} />
      <div className={styles.textContainer}>
        <h3>{character.name}</h3>
        <p className={styles.status}>
          {character.status} - {character.species}
        </p>
        <p className={styles.title}>Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
