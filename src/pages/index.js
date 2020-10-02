import React from "react"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, "jason cheng", "rutgers"]}
    />
    <LandingBio />
    <Footer>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
      </p>
      <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>
    </Footer>
  </Layout>
)

export default IndexPage
