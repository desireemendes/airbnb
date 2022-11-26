import star from "./images/star.png"
import "./Card.css"

function Card(props) {
    
  return (
    <section className="card">
      <img src={props.coverImg} alt="photo-cards" className="photo-cards" />
      <div className="cards-components">
        <img src={star} alt="rating" className="rating" />
        <span>{props.rating} </span>
        <span>{props.reviewCount} </span>
        <span>{props.location}</span>
      </div>
      <div>
        <p>{props.title}</p>
        <p><span className="bold">From {props.price}</span> / person</p>
      </div>
    </section>

  );
}

export default Card;