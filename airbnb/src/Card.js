import card from "./images/katie-zaferes.png";
import star from "./images/star.png"

function Card() {
  return (
    <section>
      <img src={card} alt="photo-cards" className="photo-cards" />
      <div>
        <p><img src={star} alt="rating" className="rating" /></p>
        <p>5.0</p>
        <p>(6)</p>
      </div>
      <div>
        <p>From $136 / person</p>
      </div>
    </section>

  );
}

export default Card;
