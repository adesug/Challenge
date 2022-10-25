import './style.css';
import Img1 from './assets/icon_facebook.png';
import Img2 from './assets/icon_instagram.png';
import Img3 from './assets/icon_twitter.png';
import Img4 from './assets/icon_mail.png';
import Img5 from './assets/icon_twitch.png';
import Img6 from './assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="address">
                            <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h4>
                            <h4>binarcarrental@gmail.com</h4>
                            <h4>081-233-334-808</h4>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul className="nav-footer">
                            <li>
                                <span >Our Services</span>
                            </li>
                            <li>
                                <span>Why Us</span>
                            </li>
                            <li>
                                <span>Testimonial</span>
                            </li>
                            <li>
                                <span>FAQ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="info-binar">
                            <h4>Connect with us</h4>
                            <a href="https://www.facebook.com/binaracademy/" >
                                <img src={Img1} alt="" />
                            </a>
                            <a href="https://www.instagram.com/academybinar/" >
                                <img src={Img2} alt="" />
                            </a>
                            <a href="https://twitter.com/academybinar" >
                                <img src={Img3} alt="" />
                            </a>
                            <a href="info@binar.co.id" >
                                <img src={Img4} alt="" />
                            </a>
                            <a href="https://m.twitch.tv/" >
                                <img src={Img5} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="copyright">
                            <h4>&copy; Copyright Binar 2022</h4>

                            <img  src={Img6} alt="logo RentCar" />
                        
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;