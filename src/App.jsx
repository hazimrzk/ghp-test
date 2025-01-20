import { useEffect } from 'react'
import About from "./components/About"
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  useEffect(() => {
    document.body.style.zoom = "95%";

    function showOnScrollRepeated(entries) {
      entries.forEach(entry => {
        // console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    }

    const observer = new IntersectionObserver(showOnScrollRepeated);
    const hiddenElements = document.querySelectorAll('*');
    hiddenElements.forEach((el) => observer.observe(el))
  }, [])

  return (
    <>
      <div className="wrapper">
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App