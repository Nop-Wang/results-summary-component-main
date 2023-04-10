import "./Card.scss";

type dataProps = {
  data:{
    category: string
    score: number
    icon:string
    bgColor:string
    color:string
  }[]
 
}




function Card(props:dataProps) {
   


  
  return (
    <div className="container">
      <div className="Left">
        <h3>Your Result</h3>
        <div className="circle">
          <h1>76</h1>
          <span>of 100</span>
        </div>
        <h1>Great</h1>
        <span>
          You scored higher than 65% of the people who have taken these tests.
        </span>
      </div>
      <div className="Right">
        <h2>Summary</h2>
        <div className="wrapper">
         {
          props.data.map((element)=>(
            <div className="summary" style={{backgroundColor:element.bgColor}}>
            <img src={element.icon} alt="icon" />
            <p style={{color:element.color}}>{element.category}</p>
            <p>
              {element.score}<span> / 100</span>
            </p>
          </div>
          ))
         } 
          
          
        </div>
        <button className="btn">Continue</button>
      </div>
    </div>
  );
}

export default Card;
