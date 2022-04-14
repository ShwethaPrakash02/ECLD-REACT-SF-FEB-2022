import React from 'react'
import styles from './Common.module.css'
const Biriyani = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.src} />
      <h4>{props.name}</h4>
      <p>{props.items}</p>
      <p>{props.rating}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Biriyani
