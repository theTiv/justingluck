import React from "react"

import Layout from "../components/Layout/Layout";
import Polaroid from "../components/Polaroid/Polaroid";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="global__page">
      <h1>Hello, I'm { 'Justin Glück' }</h1>
	  <h2>Front End Software Engineer based in London</h2>
	  <div className="global__content">
			<div className="global__image global__image--left">
				<Polaroid />
			</div>
			<div className="global__text global__text--right">
				<p>I'm a contract Front End developer based in London since 2011. I specialise in JavasScript and UI development currently working with ES6 and a variety of JavaScript Frameworks over the years with React and Vue my current favourites. I recently completed a contract for The Telegraph after 8 months working within their Travel and Frontend Engineering teams.</p> 
				<p>In addition my core everyday skills include development with HTML5, CSS(SASS), TDD with Jest and I’m experimenting with GatsbyJS (this website being developed with React and Gatsby), Vue.js and Node.js (running on AWS Lambda) in personal projects.</p>
			</div>
		</div>
    </div>
  </Layout>
)

export default IndexPage
