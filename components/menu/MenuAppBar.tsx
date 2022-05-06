import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Link from "next/link"

const styles = {
  linkAnchor: {
    color: "white",
    margin: 20,
  },
}

const MenuAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="regular">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div">
          Hiring App
        </Typography>
        <div>
          <Link href="/">
            <a style={styles.linkAnchor}>Dashboard</a>
          </Link>
          <Link href="/">
            <a style={styles.linkAnchor}>Demand Management</a>
          </Link>
          <Link href="/">
            <a style={styles.linkAnchor}>Interview Management</a>
          </Link>
          {/* <Link href="/faq">
            <a style={styles.linkAnchor}>Logout</a>
          </Link> */}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default MenuAppBar
