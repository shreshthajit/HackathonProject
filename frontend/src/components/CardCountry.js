import "./css/CardCountry.css";
const CardCountry = (props) => {
    return (
      <div class="card card-country border border-light">
        <img src={props.imgLink} class="card-img-top" alt="..." style={{height:"200px"}}></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.details}</p>
        </div>
      </div>
    )
}
 export default CardCountry;