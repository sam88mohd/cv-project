import React, { useContext, useState } from "react"
import { CvContext } from "../context/cvContext"
import Education from "./Education"
import Experience from "./Experience"
import Personal from "./Personal"
import { v4 as uuidv4 } from "uuid"
import { FaRegWindowClose } from "react-icons/fa"
import * as styles from "../styles/cvForm.module.scss"
import Button from "./utils/Button"

const CvForm = () => {
  // context
  const {
    setCv,
    educations,
    setEducations,
    experience,
    setExperience,
  } = useContext(CvContext)

  // personal state
  const [fname, setFname] = useState("")
  const [lname, setlname] = useState("")
  const [profession, setProfession] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [picture, setPicture] = useState(null)

  // education state
  const [schoolName, setSchoolName] = useState("")
  const [qualification, setQualification] = useState("")
  const [fos, setFos] = useState("")
  const [eduFrom, setEduFrom] = useState(new Date())
  const [eduTo, setEduTo] = useState(new Date())

  // experience state
  const [company, setCompany] = useState("")
  const [position, setPosition] = useState("")
  const [city, setCity] = useState("")
  const [expFrom, setExpFrom] = useState(new Date())
  const [expTo, setExpTo] = useState(new Date())

  //handle education form
  const addEducationForm = () => {
    const present = handleDate(eduTo)

    setEducations(prevList => [
      ...prevList,
      {
        id: uuidv4(),
        schoolName: schoolName,
        qualification: qualification,
        fos: fos,
        from: `${eduFrom.getDate()}/${
          eduFrom.getMonth() + 1
        }/${eduFrom.getFullYear()}`,
        to: present,
      },
    ])
    setSchoolName("")
    setQualification("")
    setFos("")
    setEduFrom(new Date())
    setEduTo(new Date())
  }

  // delete eduction list
  const deleteEdu = id =>
    setEducations(educations.filter(prevList => prevList.id !== id))

  //handle experience form
  const addExpForm = () => {
    const present = handleDate(expTo)

    setExperience(prevExp => [
      ...prevExp,
      {
        id: uuidv4(),
        company: company,
        position: position,
        city: city,
        from: `${expFrom.getDate()}/${
          expFrom.getMonth() + 1
        }/${expFrom.getFullYear()}`,
        to: present,
      },
    ])
    setCompany("")
    setPosition("")
    setCity("")
    setExpFrom(new Date())
    setExpTo(new Date())
  }

  // delete experience list
  const deleteExp = id =>
    setExperience(experience.filter(prevList => prevList.id !== id))

  // handle cv form
  const handleCvSubmit = () => {
    setCv(() => {
      const cv = {
        personal: {
          firstName: fname,
          lastName: lname,
          profession: profession,
          email: email,
          phoneNumber: phone,
          picture: picture,
        },
        educations: educations,
        experience: experience,
      }

      return cv
    })
  }

  const handleDate = d => {
    const today = new Date()
    const datePick = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
    const date = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`
    return datePick === date ? "Present" : datePick
  }

  return (
    <div className={styles.container}>
      <section>
        <h3>Personal</h3>
        <Personal
          fname={fname}
          lname={lname}
          profession={profession}
          email={email}
          picture={picture}
          phone={phone}
          setFname={setFname}
          setlname={setlname}
          setProfession={setProfession}
          setEmail={setEmail}
          setPicture={setPicture}
          setPhone={setPhone}
        />
      </section>
      <section>
        <h3>Experience</h3>
        <Experience
          company={company}
          position={position}
          city={city}
          expFrom={expFrom}
          expTo={expTo}
          setCompany={setCompany}
          setPosition={setPosition}
          setCity={setCity}
          setExpFrom={setExpFrom}
          setExpTo={setExpTo}
        />
        <article>
          {experience.map(exp => (
            <div key={exp.id} className={styles.listTask}>
              <div>
                <p>Company Name: {exp.company}</p>
                <p>Position: {exp.position}</p>
                <p>City: {exp.city}</p>
                <p>From: {exp.from}</p>
                <p>To: {exp.to}</p>
              </div>
              <div
                className={styles.closeIcon}
                onClick={() => deleteExp(exp.id)}
              >
                <FaRegWindowClose />
              </div>
            </div>
          ))}
        </article>
        <div>
          <Button handleClick={addExpForm} text="ADD" />
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <Education
          setSchoolName={setSchoolName}
          setQualification={setQualification}
          setFos={setFos}
          setEduFrom={setEduFrom}
          setEduTo={setEduTo}
          schoolName={schoolName}
          qualification={qualification}
          fos={fos}
          eduFrom={eduFrom}
          eduTo={eduTo}
        />

        <article>
          {educations.map(edu => (
            <div key={edu.id} className={styles.listTask}>
              <div>
                <p>School Name: {edu.schoolName}</p>
                <p>Qualification: {edu.qualification}</p>
                <p>Field of Study: {edu.fos}</p>
                <p>From: {edu.from} </p>
                <p>To: {edu.to}</p>
              </div>
              <div
                className={styles.closeIcon}
                onClick={() => deleteEdu(edu.id)}
              >
                <FaRegWindowClose />
              </div>
            </div>
          ))}
        </article>
        <div>
          <Button handleClick={addEducationForm} text="ADD" />
        </div>
      </section>
      <div>
        <Button handleClick={handleCvSubmit} text="SAVE INFORMATION" />
      </div>
    </div>
  )
}

export default CvForm
