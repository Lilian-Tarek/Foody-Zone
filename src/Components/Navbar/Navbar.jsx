import './Navbar.css'
import { useContext } from 'react';
import { FoodContext } from '../../App';
function Navbar()
{  
      const { setFood,allFood} = useContext(FoodContext);
 const handleSearch = (e) => {
   const searchValue = e.target.value.toLowerCase();

   if (searchValue === "") {
     setFood(allFood);
   } else {
     const filtered = allFood.filter((item) =>
       item.name.toLowerCase().includes(searchValue)
     );
     setFood(filtered);
   }
 };
    return (
      <>
        <div className="navbar bg-dark p-3">
          <div
            className="container d-flex justify-content-md-between "
          >
            <img src="/images/Foody Zone.svg" className='my-2' />
            <input
              placeholder="Search Food ....."
              className="text-white bg-dark p-1 my-2"
              onChange={handleSearch}
            />
          </div>
        </div>
      </>
    );
}
export default Navbar;