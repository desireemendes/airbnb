import star from "./images/star.png"
import "./Card.css"

function Card(props) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
    
  return (
    <section className="card">
     {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={props.stats.coverImg} alt="photo-cards" className="photo-cards" />
      <div className="cards-components">
        <img src={star} alt="rating" className="rating" />
        <span>{props.stats.rating} </span>
        <span>{props.stats.reviewCount} </span>
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