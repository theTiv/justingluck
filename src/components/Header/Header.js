import PropTypes from "prop-types"
import React from "react"
import { Link } from 'gatsby'

import Logo from "../Logo/Logo"
import classes from "./Header.module.scss"

const Header = ({ siteTitle, menuLinks }) => (
  <header className={classes.header}>
    <div className={classes.container}>
      <div className={classes.logoWrapper}>
        <Logo />
      </div>
      <nav>
        <ul style={{ display: 'flex', flex: 1, listStyle: 'none' }}>
          {menuLinks.map(link =>
            <li key={link.link}>
              <Link to={link.link}>{link.name}</Link>
            </li>
            )}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
