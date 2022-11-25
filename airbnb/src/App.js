import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';
import katie from "./images/katie-zaferes.png";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Card 
      img={katie}
      rating="5.0"
      reviewCount="6"
      country="Canada"
      title="Life Lessons with Katie Zaferes"
      price="$136"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


