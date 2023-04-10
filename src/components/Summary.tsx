import './Summary.scss'


function Summary(props:any) {
  const{category,score,icon} = props;
  
  return (
    <div className="summary">
            <img src={icon} alt="icon" />
            <p>{category}</p>
            <p>
              {score}<span> / 100</span>
            </p>
          </div>

  )
}

export default Summary