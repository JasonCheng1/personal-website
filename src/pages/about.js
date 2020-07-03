import React from "react"
import Resume from "../Resume.pdf"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageName = () => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <>
      <h1>About Me</h1>
      <p>
        Hi, my name is Jason Cheng and I am a junior studying Computer Science
        at Rutgers Univeristy- New Brunswick. I have a passion for technology
        and software engineering. I am currently interning at Optum where I am
        actively learning the latest web development tools.
      </p>
      <p>
        When I am not coding, I like to brush up on my mandarin and badminton
        skills. I enjoy watching Asian dramas and listening to classical music
        in my free time.
      </p>
      <p> Thank you for reading.</p>
      <p>
        Feel free to reach out to me on{" "}
        <a href="https://www.linkedin.com/in/jason-cheng-swe" target="_blank">
          Linkedin.
        </a>
      </p>
    </>
  </Layout>
)

export default PageName
