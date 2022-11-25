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
    </div>
  );
}

export default App;


