import Starfield from '@/components/Starfield'
import Nav from '@/components/Nav'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Involvements from '@/components/Involvements'
import Projects from '@/components/Projects'
import Coursework from '@/components/Coursework'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Starfield />
      <Nav />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <About />
        <Experience />
        <Involvements />
        <Projects />
        <Coursework />
        <Contact />
      </main>
    </>
  )
}
