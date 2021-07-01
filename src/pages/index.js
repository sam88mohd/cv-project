import React, { useRef } from "react"
import CvForm from "../components/CvForm"
import Layout from "../components/utils/Layout"
import { CvProvider } from "../context/cvContext"
import ReactToPrint from "react-to-print"
import Template from "../components/Template"
import * as styles from "../styles/button.module.scss"
export default function Home() {
  // ref to pdf
  const ref = useRef()

  return (
    <CvProvider>
      <div>
        <Layout>
          <h2>Cv Form</h2>
          <CvForm />
          <h2>Preview</h2>
          <div className="template">
            <Template refPropsWithAnotherName={ref} />
          </div>
          <div className={styles.btn}>
          <ReactToPrint
            trigger={() => <button>Print PDF</button>}
            content={() => ref.current}
          />
          </div>
        </Layout>
      </div>
    </CvProvider>
  )
}
