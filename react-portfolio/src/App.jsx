import React, { Suspense, lazy } from "react";
import styles from "./App.module.css";
import { ThemeProvider } from "./utils/ThemeContext";
import ErrorBoundary from "./components/common/ErrorBoundary";
import LoadingSpinner from "./components/common/LoadingSpinner";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Experience = lazy(() => import("./components/experience/Experience"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Contact = lazy(() => import("./components/Contact/Contact"));

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className={styles.App}>
          <Suspense fallback={<LoadingSpinner />}>
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </Suspense>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;