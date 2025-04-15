import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  // Ek aisa variable jisko hum aapne dom me use kar paye aur change kar paye usse state kahte hai : A state variable to retain the data between renders
  const [value, setValue] = useState(0)
  return (
    <div className="App">
      <Navbar logoText="code with aayush"/>
      <div className="value"> {value}</div>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
