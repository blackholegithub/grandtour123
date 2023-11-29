import CardGridComponent from "../../components/cardGridComponent/CardGridComponent"
import "./Footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreenButton,
  faLocationDot,
  faClock,
  
} from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
  return (
    <div className="footer__wrapper">
      <CardGridComponent >
        <div className="Footer__item">
          <h4>Our Awards</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima earum tempora facilis ex enim, debitis at eveniet, veniam nam blanditiis qui beatae et ut, excepturi neque impedit quae illum dolores!</p>
          <div className="footer__award__img">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="" />
          </div>  
        </div>
        <div className="Footer__item">
          <h4>Contact Info</h4>
          <div className="footer__contact__item">
            <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
            /></span>
            <span>1-567-124-44227</span>
          </div>
          <div className="footer__contact__item">
            <span> <FontAwesomeIcon
              icon={faLocationDot}
              className="icon"
            /></span>
            <span>184 Main Street East Perl Habour 8007</span>
          </div>
          <div className="footer__contact__item">
            <span> <FontAwesomeIcon
              icon={faClock}
              
              className="icon"
            /></span>
            <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
          </div>
          <div className="social__media">
          <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
              style={{color: "#005eff",}}
              
            /></span>
            <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
              style={{color: "#eeff00",}} 
            /></span>
            <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
              style={{color: "#0091ff",}} 
            /></span>
            <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
              style={{color: "#aa00ff",}} 
            /></span>
            <span> <FontAwesomeIcon
              icon={faMobileScreenButton}
              className="icon"
            /></span>
          </div>
        </div>
        <div className="Footer__item">
          <h4>Recent Trips</h4>
          <CardGridComponent className={"footer__container"}>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
            <a href="/" className="footer__img">
            <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="" />
            </a>
           
             
          </CardGridComponent>

        </div>
      </CardGridComponent>
      <div className="footer__line"></div>
      <div className="footer__end container">
        <div className="End__title">© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</div>
        <div className="footer__nav__menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
            <a href="/">Tours</a>
            </li>
            <li>
            <a href="/">Blog</a>
              </li>
            <li>
            <a href="/"> Purchase theme</a>
             </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer