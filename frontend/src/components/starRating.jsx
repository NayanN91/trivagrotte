import "./starRating.css";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function StarRating() {
  const [number, setNumber] = useState(5);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return "Evaluate";
      case 1:
        return "Dissatifation";
      case 2:
        return "Unsatisfied";
      case 3:
        return "Normal";
      case 4:
        return "Satisfied";
      case 5:
        return "Very Satisfied";
      default:
        return "Evaluate";
    }
  };

  return (
    <div className="Rating-App">
      <div className="Rating-popup">
        <div className="Rating-content">
          <div className="Rating-product">
            <h1>Villa Vitinha Portugal</h1>
          </div>
          <div>
            <h1>{handleText()}</h1>
            {Array(5)
              .fill()
              .map((_, index) =>
                number >= index + 1 || hoverStar >= index + 1 ? (
                  <AiFillStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                ) : (
                  <AiOutlineStar
                    onMouseOver={() => !number && setHoverStar(index + 1)}
                    onMouseLeave={() => setHoverStar(undefined)}
                    style={{ color: "orange" }}
                    onClick={() => setNumber(index + 1)}
                  />
                )
              )}
          </div>
          <p>
            I had an incredible trip! The sights were breathtaking, the food was
            delicious, and the locals were friendly and welcoming. Highly
            recommend it!
          </p>
        </div>
      </div>
    </div>
  );
}

export default StarRating;
