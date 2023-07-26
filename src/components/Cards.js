import React,{useState} from "react";


function Cards({id,image,info,price,name,removeTour}){
   const [readmore,setRedmore]=useState(false);
   const description=readmore?info:`${info.substring(0,200)}....`;
     
   function readmoreHandle(){
     setRedmore(!readmore);
        
   }


  return (
    <div className="Card">
       <div className="tour-info">
         <img src={image} className="image"></img> 
         <h4 className="tour-price">₹ {price}</h4>
         <h4 className="tour-name">{name}</h4>
         <div className="description">
              {description}
               <span className="read-more" onClick={readmoreHandle}>
                  {readmore ?`Show Less`:`Read More`}
              </span>
          </div>
       </div>
       <button onClick={()=>removeTour(id)} className="btn-red">
          Not Interested
       </button>
    </div>
  );
}

export default Cards;
