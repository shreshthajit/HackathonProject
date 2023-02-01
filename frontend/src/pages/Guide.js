import CardCountry from "../components/CardCountry";

const Guide = () => {
    return(
      <div className="row m-4">
        <div className="col-md-4">
          <CardCountry imgLink="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/university_of_toronto_1_1.jpg?itok=MrFd-NX5" title="Canada" details="Famous for its history, traditions, culture and scenery, the Canada is a unique, multicultural country."/>
        </div>
        <div className="col-md-4">
          <CardCountry imgLink="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2019/07/university-of-pennsylvania-campus.webp" title="Australia" details="In Australia, overseas students represent 25% of all university students. Here's why the country is so popular."/> 
        </div>
        <div className="col-md-4">
          <CardCountry imgLink="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2019/07/princeton-university-campus.webp" title="8 studying abroad myths to ignore" details="Here are the most common study abroad misconceptions to avoid."/>
        </div>
    </div>
    )
}
export default Guide;