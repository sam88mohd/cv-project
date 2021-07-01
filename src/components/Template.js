import React, { useContext } from "react"
import { CvContext } from "../context/cvContext"
import * as styles from "../styles/template.module.scss"
import profilePic from "../../static/picture.png"
import { FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa"

const Template = ({ refPropsWithAnotherName }) => {
  const { cv } = useContext(CvContext)

  return (
    <div ref={refPropsWithAnotherName} className={styles.container}>
      <header>
        <picture>
          {cv.personal.picture !== null ? (
            <img
              src={cv.personal.picture}
              alt={cv.personal.firstName}
              style={{ width: 150, height: 150 }}
            />
          ) : (
            <img
              src={profilePic}
              alt="profile by Alice Design from the Noun Project"
              style={{ width: 150, height: 150 }}
            />
          )}
        </picture>
        <div className={styles.contain}>
          <h2>
            {cv.personal.firstName} {cv.personal.lastName}
          </h2>
          <p>{cv.personal.profession}</p>
          <p><FaEnvelope /> {cv.personal.email}</p>
          <p><FaPhoneSquareAlt /> {cv.personal.phoneNumber}</p>
        </div>
      </header>
      <section>
        <div>
          <h3>WORK EXPERIENCE:</h3>
          <hr />
          <ul>
            {cv.experience.map(exp => (
              <li key={exp.id}>
                <h4>{exp.company}</h4>
                <p>{exp.position}</p>
                <article>
                  <p>{exp.city}</p>
                  <p>
                    {exp.from} - {exp.to}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>EDUCATION:</h3>
          <hr />
          <ul>
            {cv.educations.map(edu => (
              <li key={edu.id}>
                <h4>{edu.schoolName}</h4>
                <p>{edu.qualification}</p>
                <p>{edu.fos}</p>
                <article>
                  <p>
                    {edu.from} - {edu.to}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Template
