import React from "react"
import Input from "./utils/Input"
import DatePicker from "react-date-picker"
import * as styles from "../styles/form.module.scss"

const Education = ({
  schoolName,
  qualification,
  fos,
  eduFrom,
  eduTo,
  setSchoolName,
  setQualification,
  setFos,
  setEduFrom,
  setEduTo,
}) => {
  return (
    <section className={styles.container}>
      <h3>Add Education Info:</h3>
      <div className={styles.form}>
        <Input
          type="text"
          placeholder="School Name"
          value={schoolName}
          onChange={e => setSchoolName(e.target.value)}
        />
        <Input
          type="text"
          value={qualification}
          placeholder="Qualification"
          onChange={e => setQualification(e.target.value)}
        />
        <Input
          type="text"
          value={fos}
          placeholder="Field of Study"
          onChange={e => setFos(e.target.value)}
        />
        <div className={styles.date}>
          <label htmlFor="from">From:</label>
          <DatePicker value={eduFrom} onChange={setEduFrom} />
          <label htmlFor="to">To: </label>
          <DatePicker value={eduTo} onChange={setEduTo} />
        </div>
      </div>
    </section>
  )
}

export default Education
