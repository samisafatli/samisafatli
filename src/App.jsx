import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Timeline from './components/Timeline/Timeline'
import { useState, useEffect } from 'react'
import { sun, moon } from './styles/svg/theme'

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md"
      >
        {theme === 'dark' ? sun : moon}
      </button>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
