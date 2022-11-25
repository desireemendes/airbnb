import card from "./images/katie-zaferes.png";
import star from "./images/star.png"
import "./Card.css"

function Card() {
  return (
    <section className="card">
      <img src={card} alt="photo-cards" className="photo-cards" />
      <div className="cards-components">
        <img src={star} alt="rating" className="rating" />
        <span>5.0 </span>
        <span>(6)  • </span>
        <span>USA</span>
      </div>
      <div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>
      </div>
    </section>

  );
}

export default Card;