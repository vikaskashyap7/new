  
import Cards from "./Cards";

  function Tour({tours,removeTour}){
    return(
    <div className="container">
        <div> 
            <h2 className="title">Plan With Vikas</h2>
        </div>
        <div className="cards">
            {
                tours.map((tour)=>{
                    return <Cards key={tour.id}{...tour} removeTour={removeTour}></Cards>
                })
            }
        </div>
    </div>);
}

export default Tour;