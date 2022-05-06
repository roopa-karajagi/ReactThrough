import React, { useState } from "react"
import { Container, Box, Typography, Button } from "@mui/material"
import HAOtpInput from "./components/otpInput/HAOtpInput"
import styles from "./VerifyCode.module.css"

interface VerifyCodeProps {
  onVerifyCode: (code: string) => any
}

const VerifyCode = ({ onVerifyCode }: VerifyCodeProps) => {
  const [otp, setOtp] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    onVerifyCode(otp)
  }

  function handleOnChange(value: any) {
    setOtp(value)
  }

  return (
    <div className={styles.main}>
      <Container maxWidth="sm" className={styles.container}>
        <Typography variant="h5" gutterBottom className={styles.mt3}>
          Verification Code
        </Typography>
        <Typography variant="h6">
          Please enter the verification code sent to your mobile
        </Typography>
        <Box
          component="span"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "25ch",
              ["@media (min-width:600px)"]: {
                m: 2,
                width: "40ch",
              },
            },
          }}
        >
          <form onSubmit={handleSubmit} className={styles.formgroup}>
            <HAOtpInput receiveChange={handleOnChange} />
            <Button type="submit" variant="contained" className={styles.mt2}>
              Verify
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  )
}

export default VerifyCode
