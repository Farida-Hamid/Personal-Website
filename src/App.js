import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';

// const Header = () => {
//   const scroll = (element) => {
//     const section = document.querySelector( element );
//     section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
//   };
//   return (
//     <div className="header">
//       <h2>Farida</h2>

//       <div style={{fontSize: "13px"}}>
//         <a onClick={() => scroll('.about')}><div className="robotic">1.0</div> About Me</a>
//         <a onClick={() => scroll('#projects-section')}><div className="robotic">2.0</div> Projects</a>
//         <a onClick={() => scroll('.call')}><div className="robotic">3.0</div> Contacts</a>
//       </div>
//     </div>

//   )
// }

const App  = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <section className='content'>
          <About />
          <Projects/>
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
