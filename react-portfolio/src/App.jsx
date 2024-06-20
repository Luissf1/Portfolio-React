import _styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Experience } from "./components/experience/Experience";

function App() {
  return (
    <div className={_styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;
