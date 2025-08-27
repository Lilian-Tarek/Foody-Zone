import Button from "./Button";
function Buttons()
{  


  
    return (
      <>
        <div className="d-flex justify-content-center bg-dark gap-2 py-4">
          <Button text="All" class="all"/>
          <Button text="Breakfast" class="breakfast"/>
          <Button text="Lunch" class="lunch"/>
          <Button text="Dinner" class="dinner" />
        </div>
      </>
    );
}
export default Buttons;