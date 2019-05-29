import React from "react"
import classes from "./Footer.module.scss"          
          
const Footer = () => (
    <footer className={classes.FooterContainer}>
        <div className={classes.FooterContent}>
            © {new Date().getFullYear()}, designed and developed by Justin Glück using
            {` `}
            <a className={classes.FooterLink} href="https://www.reactjs.org" target="blank">React</a>
            {` and `}
            <a className={classes.FooterLink} href="https://www.gatsbyjs.org" target="blank">Gatsby</a>
        </div>
  </footer>
  )        
          
export default Footer;