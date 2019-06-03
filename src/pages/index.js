import React from "react"

import Layout from "../components/Layout/Layout";
import FadeSlideshow from '../components/FadeSlideshow/FadeSlideshow';
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Global__page-content">
      <h1>Introducing { 'Justin Glück' }, Front End Software Engineer</h1>
      <div className="Global__image-wrapper">
        <FadeSlideshow />
      </div>
      <p>Welcome to my portfolio website</p> 
      <p>I'm a contract JavaScript/UI Developer specializing in React and based in London.</p>
    </div>
  </Layout>
)

export default IndexPage
