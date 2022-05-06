import OtpInput from "react-otp-input"
import React, { useState } from "react"
import { StylesContext } from "@material-ui/styles"
import styles from "./HAOtpInput.module.css"

interface HAOtpInputProps {
  receiveChange: (code: string) => any
}

const HAOtpInput = ({ receiveChange }: HAOtpInputProps) => {
  const [otp, setOtp] = useState("")

  function handleOnChange(value: string) {
    setOtp(value)
    receiveChange(value)
  }

  return (
    <OtpInput
      value={otp}
      onChange={handleOnChange}
      numInputs={6}
      separator={
        <span>
          <strong>.</strong>
        </span>
      }
      inputStyle={styles.input}
    />
  )
}

export default HAOtpInput
