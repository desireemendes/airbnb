import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';
import data from "./data"


function App() {
  const cardElements = data.map(item => {
    return ( <Card 
      key={item.id}
      {...item}
    />
    )
  })
  return (
    <div className="App">
      <Nav />
      <Hero />
      {cardElements}
    </div>
  );
}

export default App;


