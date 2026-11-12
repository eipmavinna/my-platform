
import './App.css'

type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}


function App() {

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  }
  // array of reports
  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
    { id: '3', text: 'asdff', kind: 'feature' },
  ]



  return (
    <main>
      <nav className="navbar">
        <a href="#home">Home</a>
        <span>|</span>
        <a href="#about">Projects</a>
        <span>|</span>
        <a href="#resume">Resume</a>
        <span>|</span>
        <a href="#contact">Contact</a>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Anna Hutchins</h1>
          <p  style={{ marginTop: '15px' }}>
            Computer Science student with minors in AI and Machine Learning
          </p>

          <div className="social-links">
            <a
              href="https://github.com/eipmavinna"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/anna-hutchins-gcc"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a href="mailto:homeschooledandtired@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <h2>About</h2>
        <p>
          I'm a Computer Science student interested in software engineering,
          artificial intelligence, and full stack development.
        </p>
        <p>
          I enjoy solving problems, learning new technologies, and developing
          software that makes complex tasks easier.
        </p>

      </section>

      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        <ul>
          {initialReports.map((report) => (
            <li key={report.id}>
              {report.text} ({report.kind})
            </li>
          ))}
        </ul>

      </section>


    </main >
  )
}

export default App
