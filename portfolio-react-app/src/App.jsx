import Navbar from './components/Navbar';
import ProjectsGallery from './components/ProjectsGallery';
import Introduction from './components/Introduction';
import Languages from './components/Languages';
import Tools from './components/Tools';
import Footer from './components/Footer';
import projects from './projects';
import "./App.css";


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
   <hr />
    <Footer />
     
    </>
  )
}

export default App
