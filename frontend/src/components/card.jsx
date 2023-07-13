import "./card.css";

const Card = (props) => {
  const { id, name, max_capacity, region, piscine, feu, price, vue, img } =
    props;
  return (
    <div className="cardGlobal">
      <div className="cards">
        <div className="cardImage">
          <img src={img} alt="OUAILIMAGE" />
          <div className="infos">
            <ul>
              <li>{name}</li>
              <li>{region}</li>
              <li>{price} mootmoot/night</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
