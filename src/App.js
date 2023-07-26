import React, {useState} from "react";
import data from "./data";
import Tours from "./components/Tours";
// import Card from  "./components/Cards";



const App = () => {
  const [tours,setTour]= useState(data);
  function removeTour(id){
    const newTour=tours.filter(tour=>tour.id!==id);
    setTour(newTour);
  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>Tour Not Left</h2>
        <button className="btn-white" onClick={()=>setTour(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
