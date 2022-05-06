import React, { useState } from "react"
import { Container, Box, Typography, Button } from "@mui/material"
import styles from "./SendCode.module.css"
import MuiPhoneNumber from "material-ui-phone-number"

interface LoginProps {
  onSendCode: (phoneNumber: string) => any
}

const SendCode = ({ onSendCode }: LoginProps) => {
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    onSendCode(phoneNumber)
  }

  function handleOnChange(value: any) {
    //console.log(value)
    setPhoneNumber(value)
  }

  return (
    <div className={styles.main}>
      <div id="captchaContainer" />
      <Container maxWidth="sm" className={styles.container}>
        <Typography variant="h5" gutterBottom>
          Login
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
            <MuiPhoneNumber defaultCountry={"in"} onChange={handleOnChange} />
            <Button
              color="primary"
              type="submit"
              variant="contained"
              className={styles.mt2}
            >
              Send OTP
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  )
}

export default SendCode
