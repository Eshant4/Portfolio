
import './App.css';
import Intro from './components/Intro';
import ScrollAnimateSection from './components/ScrollAnimateSection';
import Skills from './components/Skills';

  function App() {
    return (
      <div>
        <ScrollAnimateSection />
        <Intro/>
        <Skills/>
      </div>
    );
  }

  export default App;
