import { About } from "../src/Components/About";
import Footer from "../src/Components/Footer";
import { Header } from "../src/Components/Header";
import Navbar from "../src/Components/Navbar";
import { Projects } from "../src/Components/Projects";
import Skills from "../src/Components/Skills";
import client from "../src/lib/sanity";

export const getStaticProps = async() => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const social = await client.fetch(`*[_type == "social"][0]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const skills = await client.fetch(`*[_type == "skills"][0]`);
  const projects = await client.fetch(`*[_type == "projects"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);

  return {
    props: { 
      header,
      social,
      about,
      skills,
      projects,
      footer
    }
  }
}

interface HomeProps {
  header: any
  social: any
  about: any
  skills: any
  projects: any
  footer: any
}

export default function Home({header, social, about, skills, projects, footer}: HomeProps) {
  return (
    <>
      <Navbar />
      <Header header={header} social={social}/>
      <main>
        <About about={about}/>
        <Skills skills={skills}/>
        <Projects projects={projects} />
      </main>
      <Footer footer={footer}/>
    </>
  )
}
