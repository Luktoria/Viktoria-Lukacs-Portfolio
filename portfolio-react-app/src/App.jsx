// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import catImg from '/1992501.jpg'
// import viteLogo from '/vite.svg'
import Navbar from './components/Navbar';
import ProjectsGallery from './components/ProjectsGallery';
import Introduction from './components/Introduction';
import Languages from './components/Languages';
import Tools from './components/Tools';
import Footer from './components/Footer';
import projects from './projects';
import "./App.css";
// import './App.css'

function trial(projectItem){
  return(
    <ProjectsGallery
    key={projectItem.id}
    title={projectItem.title}
    img={projectItem.img}
    site={projectItem.liveSite}
    code={projectItem.codePreview}
    html={projectItem.languages1}
    css={projectItem.languages2}
    javascript={projectItem.languages3}
     />
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <hr />

    <Introduction/>
    <hr />

    <h2 className="languages-heading">Languages and frameworks</h2>
    <Languages />
    <hr />

    <h2 className="tools-heading">Tools and Libraries</h2>
    <Tools />
    <hr />

    <h1 className="projects-heading">Projects</h1>
   <div className="projects-table">{projects.map(trial)}</div>
    <Footer />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={catImg} alt="image of cat" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
