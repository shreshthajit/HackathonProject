import "../components/css/Footer.css";

import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = (props) => {
   return (
<>
<section class="contact-area" id="contact">
        <div class="my-4">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="contact-content text-center">
                        <h1 className="mt-4">Study Higher</h1>
                        {/* <a href="#"><img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"/></a> */}
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
                        <div class="hr"></div>
                        <h6>1120 Lorem ipsum dolor sit amet, KC 179050, Chandigarh.</h6>
                        <h6>+01 2345 6789 12<span>|</span>+01 2345 6789 12</h6>
                        <div class="contact-social">
                            <ul>
                                <li><a class="hover-target" href=""><FaFacebookF/></a></li>
                                <li><a class="hover-target" href=""><FaLinkedinIn/></a></li>
                                <li><a class="hover-target" href=""><BsGithub/></a></li>
                                <li><a class="hover-target" href=""><AiOutlineMail/></a></li>
                                <li><a class="hover-target" href=""><BsWhatsapp/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}
 export default Footer;