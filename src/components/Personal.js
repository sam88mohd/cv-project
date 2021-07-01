import React from "react"
import Input from "./utils/Input"
import * as styles from "../styles/form.module.scss"
import pic from "../../static/picture.png"

const Personal = ({
  fname,
  lname,
  profession,
  email,
  phone,
  picture,
  setFname,
  setlname,
  setProfession,
  setEmail,
  setPicture,
  setPhone,
}) => {
  const handleFile = e => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setPicture(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <section className={styles.container}>
      <h3>Add Personal Info:</h3>
      <div className={styles.form}>
        <div className={styles.picture}>
          <label htmlFor="picture">
            <img
              src={picture ? picture : pic}
              alt=""
              style={{
                width: 150,
                height: 150,
                borderRadius: 50,
                cursor: "pointer",
              }}
            />
            <Input
              id="picture"
              style={{ display: "none" }}
              type="file"
              onChange={e => handleFile(e)}
            />
          </label>
        </div>
        <Input
          type="text"
          placeholder="First Name"
          value={fname}
          onChange={e => setFname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lname}
          onChange={e => setlname(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Profession"
          value={profession}
          onChange={e => setProfession(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
    </section>
  )
}

export default Personal
