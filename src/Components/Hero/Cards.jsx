import { useContext} from "react";
import Button from '../Navbar/Buttons/Button'
import './Cards.css'
import { FoodContext } from "../../App";
function Cards()
{
  const { food } = useContext(FoodContext);
  return (
    <>
      <div className="Hero bg-dark text-white d-flex justify-content-center ">
        <div className="container">
          <div className="row">
            {food.map((e, index) => {
              return (
                <div className="p-2 col-lg-4 col-md-6 " key={index}>
                  <div className="card d-flex p-2 align-items-center text-white">
                    <div className="row ">
                      <div className="col-lg-4 d-flex justify-content-center img">
                        <img src={e.image} />
                      </div>
                      <div className="writing col-lg-8">
                        <h5 className="fw-bold">{e.name}</h5>
                        <p>{e.text}</p>
                        <div className="button text-end pe-3">
                          <Button text={"$ " + e.price} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cards;