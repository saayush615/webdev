import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    const styles = {
    padding: '2px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    textAlign: 'center'
  }
  return (
    <div style={styles}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente hic eum molestias magnam voluptas facere beatae, est qui! Deleniti error necessitatibus quam dolor magnam ea eius laboriosam. Unde, incidunt illo ipsa ducimus nostrum adipisci magnam natus ea perspiciatis cumque fuga doloribus consequatur doloremque sint, fugiat suscipit eaque placeat modi eligendi?
    </div>
  )
}

export default Home
