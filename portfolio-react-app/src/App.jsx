// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import catImg from '/1992501.jpg'
// import viteLogo from '/vite.svg'
import Header from './components/Header';
import Main from './components/Main'
import Footer from './components/Footer';
import projects from './projects';
// import './App.css'

function trial(projectItem){
  return(
    <Main
    key={projectItem.id}
    desc={projectItem.desc}
    img={projectItem.img}
     />
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <h1>{projects.map(trial)}</h1>
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
