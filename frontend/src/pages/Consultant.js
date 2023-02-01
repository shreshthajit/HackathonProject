import { Link } from "react-router-dom";
import "../components/css/Consultant.css";
const Consultant = () => {
  return (
    <div className="">
 <div class="row m-5">
        <div class="col-sm-4">
          <div class="card-consultant card card_red text-center">
            <div class="title">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
              <h2>Package-1</h2>
            </div>
            <div class="price">
              <h4>BDT 2000</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>SOP Review</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Formal Email Review</li>
           
                </ul>
            </div>
            <Link  to="/documentReviewForm" >
              Buy Now
            </Link>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-consultant card card_violet text-center">
            <div class="title">
              <i class="fa fa-plane" aria-hidden="true"></i>
              <h2>Package-2</h2>
            </div>
            <div class="price">
            <h4>BDT 2500</h4>
            </div>
            <div class="option">
              <ul>
              <li><i class="fa fa-check" aria-hidden="true"></i>SOP Review</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Formal Email Review</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Academic CV</li>
          
                </ul>
            </div>
            <Link  to="/documentReviewForm" >
              Buy Now
            </Link>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card-consultant card card_three text-center">
            <div class="title">
              <i class="fa fa-rocket" aria-hidden="true"></i>
              <h2>Package-3</h2>
            </div>
            <div class="price">
            <h4>BDT 3000</h4>
            </div>
            <div class="option">
              <ul>
                <li><i class="fa fa-check" aria-hidden="true"></i>SOP Review</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Formal Email Review</li>
                <li><i class="fa fa-check" aria-hidden="true"></i>Academic CV</li>
                <li><i class="fa fa-times" aria-hidden="true"></i>Essay</li>
              </ul>
            </div>
            <Link  to="/documentReviewForm" >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Consultant;
 