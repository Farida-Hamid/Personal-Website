import './style/App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Intro from './components/Intro';

const App  = () => {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
