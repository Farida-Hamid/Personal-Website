import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Projects from './components/Projects';

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
