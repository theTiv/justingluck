import React from "react"

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import Zoom from 'react-reveal/Zoom';


const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="global__page">
      <h1>Hello, I'm { 'Justin Glück' }</h1>
	  <h2>Front End Software Engineer based in London</h2>
	  	<div className="global__content">
      <Zoom>
  <p>Markup that will be revealed on scroll</p>
</Zoom>
		</div>
    </div>
  </Layout>
)

export default IndexPage
