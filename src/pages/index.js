import React from "react"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="Global__page-content">
      <h1>Introducing { 'Justin Glück' }, Front End Software Engineer</h1>
      <div className="Global__image-wrapper">
        <Image />
      </div>
      <p>Welcome to my portfolio website, I'm a contract Front End Developer specializing in React and based in London.</p>
    </div>
  </Layout>
)

export default IndexPage
