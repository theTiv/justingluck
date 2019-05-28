import React from "react"
import classes from "./Footer.module.scss"          
          
const Footer = () => (
    <footer className={classes.FooterContainer}>
        <div className={classes.FooterContent}>
            © {new Date().getFullYear()}, Developed by Justin Glück using
            {` `}
            <a className={classes.FooterLink} href="https://www.reactjs.org">React</a>
            {` and `}
            <a className={classes.FooterLink} href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
  </footer>
  )        
          
export default Footer;