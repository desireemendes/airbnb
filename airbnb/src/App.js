import './App.css';
import Nav from './Nav';
import Hero from './Hero';
import Card from './Card';
import data from "./data"


function App() {
  const cardElements = data.map(item => {
    return ( <Card 
      key={item.id}
    title={item.title} 
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    location={item.location}
    price={item.price}
    openSpots={item.openSpots}
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


