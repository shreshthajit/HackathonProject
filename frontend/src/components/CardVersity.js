import { Link } from "react-router-dom";
import "./css/CardVersity.css";


const CardVersity = (props) => {
  var v=props.id;
  return (
    <div class="card card-versity mx-4 p-3 my-3" >
      <div className="row">
        <div className="col-md-9 ">
            <div className="row">
            <img src={props.logo} className="col-md-3" style={{width: "120px", height: "100px"}}></img>
              <div className="col-md-9 pt-2">
                <h3 className="">{props.subName}</h3>
                <h5>{props.versityName} {props.countryName} {props.onlineStatus}</h5>
              </div>
            </div>
            <div className="row mt-2 ">
              <div className="col-md-3 col-6 bg-light pt-2">
                <p>Type</p>
                <h5>{props.proType}</h5>
              </div>
              <div className="col-md-3 col-6 bg-light pt-2">
                <p>Duration</p>
                <h5>{props.duration}</h5>
              </div>
              <div className="col-md-3 col-6 bg-light pt-2">
                <p>Annual tuition fee</p>
                <h5>{props.annualFee}</h5>
              </div>
              <div className="col-md-3 col-6 bg-light pt-2">
                <p>Start date</p>
                <h5>{props.startDate}</h5>
              </div>
            </div>
        </div>
        <div className="col-md-3 d-md-flex align-items-center justify-content-center">
          <div class="d-grid gap-3 my-3">
            <button class="btn btn-primary py-3 px-5 text-nowrap" type="button">Visit program webpage</button>
            <Link to={'/programs/' + v} className="m-auto">
            {/* <Link to={'/guide'} className="m-auto"> */}
              <button class="visit-details btn btn-danger py-3 px-5"  type="button">
                  Program details 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default CardVersity;