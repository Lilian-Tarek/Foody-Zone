import './Button.css';
import { useContext } from 'react';
import { FoodContext } from '../../../App';
function Button(props)
{
  const { setFood,allFood,food} = useContext(FoodContext);
  function type() {
    if (props.class == "all") {
  setFood(allFood);
    }
    else {
      const filtered = allFood.filter((item) =>
        item.type.includes(props.class)
      )
      setFood(filtered);
    }
  }
  
    return (
      <>
        <button
          className={`btn text-white py-2 px-3 border-0 fw-bold ${props.class}`}
          onClick={type} 
        >
          {props.text}
        </button>
      </>
    );
}
export default Button;