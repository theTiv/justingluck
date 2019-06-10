import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import classes from "./Polaroid.module.scss"

const polaroid = (props) => (
	<StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "jg-profile-pic-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Img fluid={data.placeholderImage.childImageSharp.fluid} />
				<div className={classes.caption}>{ 'Justin Glück' }, Web Developer</div>
			</div>
  		</div>
	}
  />
)

export default polaroid;	