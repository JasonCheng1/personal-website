import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"

// const Container = styled.div`
//   margin: 0 auto;
//   max-width: 860px;
//   padding: 0 1.0875rem 1rem;
//   padding-top: 0;
// `
const PageName = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

    <h1>About Me</h1>
    <p>
      Hi, my name is Jason Cheng and I am a junior studying Computer Science at
      Rutgers Univeristy- New Brunswick. I have a passion for full stack
      development and big data. This pass summer, I interned at Optum where I
      built an employee data analytics web app for the human capital team at
      UHG. During this internship, I learned a lot of frontend technologies
      including html, css, js, react, and redux, and also actively learning the
      latest web development tools.
    </p>
    <p>
      When I am not coding, I like to brush up on my mandarin and badminton
      skills. I enjoy watching Asian dramas and listening to classical music in
      my free time.
    </p>
    <p> Thank you for reading.</p>
    <p>
      Feel free to reach out to me on{" "}
      <a href="https://www.linkedin.com/in/jason-cheng-swe" target="_blank">
        Linkedin.
      </a>
    </p>
  </Layout>
)

export default PageName
