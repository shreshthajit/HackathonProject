import { Route, Routes } from "react-router-dom";
import CardVersity from "../components/CardVersity";
import VerSearchNav from "../components/VerSearchNav";
import ProgramDetails from "./ProgramDetails";


const Program = () => {
  const cardVDetails=[ 
    { 
      _id: '1',
      logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
      subName:'ESL Program - ESOL',
      versityName:'DEA Canadian College, ',
      countryName:'Canada',
      onlineStatus:'Online',
      proType:'Undergraduate certificate',
      duration:'2 months',
      annualFee:'579 GBP',
      startDate: 'March, April, May, June, July, August, September, October, November, December, January, February',
      versityLink:'',
      details:''  
    },
    {
      _id: '2',
      logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
      subName:'University Pathway - UGP',
      versityName:'DEA Canadian College, ',
      countryName:'Canada',
      onlineStatus:'Online',
      proType:'Undergraduate pathway',
      duration:'2 months',
      annualFee:'579 GBP',
      startDate: 'March, April, May, June, July, August, September, October, November, December, January, February',
      versityLink:'',
      details:''
    },
    { 
      _id: '3',
      logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
      subName:'REAL Intensive English - Cert',
      versityName:'Westcliff University, ',
      countryName:'USA ',
      onlineStatus:'Online',
      proType:'Undergraduate certificate',
      duration:'2 months',
      annualFee:'806 GBP',
      startDate: 'June',
      versityLink:'',
      details:''
    },
    {
      _id: '4',
      logo:'https://images.studee.com/images/university/university__dea-canadian-college--logo.png?ixlib=js-2.3.2&auto=format&fit=crop&q=35&w=85&h=85',
      subName:'Biology - MSc',
      versityName:'Vrije Universiteit Brussel,',
      countryName:'Belgium',
      onlineStatus:'',
      proType:'Masters',
      duration:'2 years',
      annualFee:'844 GBP',
      startDate: 'September',
      versityLink:'',
      details:''
    },
  ]; 
  return(
  <>
    <VerSearchNav />
   
    {cardVDetails
      .map((c)=>(
        <div>
          <CardVersity id={c._id} logo={c.logo} subName={c.subName} versityName={c.versityName} countryName={c.countryName} onlineStatus={c.onlineStatus} proType={c.proType} duration={c.duration} annualFee={c.annualFee} startDate={c.startDate} />
        </div>
    ))}

  </>
  )
}
export default Program;