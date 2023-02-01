import Card from "./components/Card";
import CardCountry from "./components/CardCountry";
import './Home.css'

const Home = () => {
    const card1Details=[ 
        { cardImg:'https://img.icons8.com/officel/512/parse-resumes.png', cardTitle: 'CREATE PROFILE', pathName: '/register'},
        { cardImg:'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-guidelines-virus-transmission-flaticons-lineal-color-flat-icons.png', cardTitle: 'BLOG', pathName: '/guide'},
        { cardImg:'https://img.icons8.com/external-wanicon-lineal-color-wanicon/512/external-search-online-learning-wanicon-lineal-color-wanicon.png', cardTitle: 'SEARCH PROGRAM', pathName: '/programs'}    
    ];

    return(
    <div>
        <div className="Home">
            <div class="context">
                <h1>Study Higher</h1>
            </div>
            <div class="area">

                <ul class="circles m-0">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <section class="pattern">
                </section>
            </div>
        </div>
        <div className='three-cards d-flex justify-content-around align-items-end'>
              <div className="row">
                    {card1Details
                        .map((c)=>(
                        <div className="col-md-4 col-12">
                            <Card pathName={c.pathName} img={c.cardImg} title={c.cardTitle}/>
                            
                        </div> 
                    ))}
              </div>
              
        </div>
        <h2 className="text-center my-5">Popular study abroad destinations</h2>
        <div className="row m-4 mb-5">
          <div className="col-md-4">
          <CardCountry imgLink="https://www.timeshighereducation.com/student/sites/default/files/styles/default/public/university_of_toronto_1_1.jpg?itok=MrFd-NX5" title="Canada" details="Famous for its history, traditions, culture and scenery, the Canada is a unique, multicultural country."/>
          </div>
          <div className="col-md-4">
          <CardCountry imgLink="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2019/07/university-of-pennsylvania-campus.webp" title="Australia" details="In Australia, overseas students represent 25% of all university students. Here's why the country is so popular."/>
          </div>
          <div className="col-md-4">
          <CardCountry imgLink="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2019/07/princeton-university-campus.webp" title="UK" details="Huge, diverse and welcoming, the UK is the number one destination for international students who want to study overseas."/>
          </div>
        </div>

    </div>
    )
}
export default Home;