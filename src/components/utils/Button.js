import React from "react"
import * as styles from "../../styles/button.module.scss"

const Button = ({ text, handleClick }) => {
  return (
    <div className={styles.btn}>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default Button
