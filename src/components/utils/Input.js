import React from "react"
import * as styles from "../../styles/input.module.scss"

const Input = ({ type, placeholder, onChange, value, style, id }) => {
  return (
    <div className={styles.container}>
      <input
        id={id}
        style={style}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
