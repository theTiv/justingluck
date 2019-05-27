import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../Logo/Logo"
import classes from "./Header.module.scss"

const Header = ({ siteTitle }) => (
  <header
    className={classes.Header}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={classes.Heading}
        >
          {siteTitle}
        </Link>
      </h1>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
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
