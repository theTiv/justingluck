import React from "react"

import Layout from "../components/Layout/Layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="Global__page-content">
      <h1>Front End Software Engineer</h1>
      <p>Welcome to my portfolio website</p>
      <p>I'm a contract and freelance Front End Developer based in London.</p>
      <div className="Global__image-wrapper">
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
