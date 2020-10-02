import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageName = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />

    <h1>About Me</h1>
    <p>
      Hi, my name is Jason Cheng, and I am a junior studying Computer Science at
      Rutgers University-New Brunswick. I have a passion for full-stack
      development and big data.
    </p>
    <p>
      This past summer, I interned at Optum, where I built an employee data,
      analytics web app for the human capital team at UHG. During this
      internship, I learned many front-end technologies, including HTML, CSS,
      Javascript, React, and Redux. This semester, I am learning how to write
      back-end server applications and researching the feasibility of an SNN for
      population estimation using satellite imagery data.
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
