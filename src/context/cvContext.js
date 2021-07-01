import React, { createContext, useState } from "react"

export const CvContext = createContext()

export const CvProvider = ({ children }) => {
  const [educations, setEducations] = useState([])
  const [experience, setExperience] = useState([])
  const [cv, setCv] = useState({
    personal: {
      firstName: "Your",
      lastName: "Name",
      profession: "profession",
      email: "email@domain.com",
      phoneNumber: "123456",
      picture: null,
    },
    educations: [
      {
        id: "",
        schoolName: "",
        qualification: "",
        fos: "",
        from: "",
        to: "",
      },
    ],
    experience: [
      {
        id: "",
        company: "",
        position: "",
        city: "",
        from: "",
        to: "",
      },
    ],
  })

  return (
    <CvContext.Provider
      value={{
        educations,
        setEducations,
        experience,
        setExperience,
        cv,
        setCv,
      }}
    >
      {children}
    </CvContext.Provider>
  )
}
