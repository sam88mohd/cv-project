import React from "react"
import Input from "../components/utils/Input"
import * as styles from "../styles/form.module.scss"
import DatePicker from "react-date-picker"

const Experience = ({
  company,
  position,
  city,
  expFrom,
  expTo,
  setCompany,
  setPosition,
  setCity,
  setExpFrom,
  setExpTo,
}) => {
  return (
    <section className={styles.container}>
      <h3>Add Experience Info:</h3>
      <div className={styles.form}>
        <Input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Position"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <Input
          type="text"
          placeholder="City"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <div className={styles.date}>
          <label htmlFor="from">From:</label>
          <DatePicker value={expFrom} onChange={setExpFrom} />
          <label htmlFor="to">To: </label>
          <DatePicker value={expTo} onChange={setExpTo} />
        </div>
      </div>
    </section>
  )
}

export default Experience
