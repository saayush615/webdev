import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const styles = {
    padding: '2px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    textAlign: 'center'
  }
  return (
    <div>
    <nav style={styles}>
      <h1>Theme Switcher App</h1>
    </nav>
    <button onClick={toggleTheme}>Mode</button>
    </div>
  )
}

export default Navbar
