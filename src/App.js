import './App.css';
import { HelloWorld, ByeWorld } from './components/HelloWorld';
import { useState, useEffect } from 'react';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {

  const [counter, setCounter] = useState(0);

  const incrementor = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    document.title = `Clicked ${counter} times`;
  }, [counter]);

  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/' className='text'>Home</Link>
          <Link to='/contact' className='text'>Contact</Link>
          <Link to='/about' className='text'>About</Link>
        </nav>
        <Routes>
        <Route exact path='/' element={
          <>
            <h1>Hello world: my first react work</h1>
            <p>Amrit Raj building this Project</p>
            <HelloWorld text="Sup bro" />
            <ByeWorld />
            <button onClick={incrementor}>Click me</button>
            <h1>{counter}</h1>
          </>
        } />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
