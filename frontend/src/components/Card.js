import { Link } from "react-router-dom";
import "./css/Card.css";

const Card = (props) => {
   var s = props.pathName
   return (
   <Link to={s} className="m-auto">
    <div className="card card-1 card_three border border-none mx-5 my-2">
      <div className="m-auto my-4">
        <img src={props.img} className="card-img-top"  style={{width: "120px", height: "120px"}}></img>
      </div> 
      <div className="card-body ">
        <h4 className="p-4 text-nowrap text-center"  style={{minWidth: "261px"}} >{props.title}</h4>
      </div>
    </div>
  </Link>
  )
}
 export default Card;