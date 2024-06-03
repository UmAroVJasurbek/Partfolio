import './Footer.scss'
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from '../../assets/Logo'

const Footer = () => {
  return (
    <section className='footer' id='footer' role='footer'>
      <div className="container container--xs">
        <div className='footer__wrapper'>
          <div className='footer__top'>
            <ul>
              <li style={{ color: "#C0AF9F" }}>Collection</li>
              <li style={{ color: "#463527" }}>All models</li>
              <li style={{ color: "#463527" }}>New Models 2024</li>
              <li style={{ color: "#463527" }}>Grand Complications</li>
              <li style={{ color: "#463527" }}>Complications</li>
              <li style={{ color: "#463527" }}>Calatrava</li>
              <li style={{ color: "#463527" }}>Gondolo</li>
              <li style={{ color: "#463527" }}>Golden Ellipse</li>
              <li style={{ color: "#463527" }}>Nautilus</li>
              <li style={{ color: "#463527" }}>Aquanaut</li>
            </ul>
            <ul>
              <li style={{ color: "#C0AF9F" }}>Twenty~4</li>
              <li style={{ color: "#463527" }}>Pocket Watches</li>
              <li style={{ color: "#463527" }}>Rare Handcrafts</li>
              <li style={{ color: "#C0AF9F" }}>COMPANY</li>
              <li style={{ color: "#463527" }}>Savoir-Faire</li>
              <li style={{ color: "#463527" }}>The Manufacture</li>
              <li style={{ color: "#C0AF9F" }}>OTHERS</li>
              <li style={{ color: "#463527" }}>Wallpapers</li>
              <li style={{ color: "#463527" }}>Glossary</li>
              <li style={{ color: "#463527" }}>Cookie Settings</li>
            </ul>
            <ul>
              <li style={{ color: "#C0AF9F" }}>RETAIL</li>
              <li style={{ color: "#463527" }}>Patek Philippe Salons</li>
              <li style={{ color: "#463527" }}>Authorized Retailers</li>
              <li style={{ color: "#C0AF9F" }}>SERVICES</li>
              <li style={{ color: "#463527" }}>Owners</li>
              <li style={{ color: "#463527" }}>Instructions for use & settings</li>
              <li style={{ color: "#463527" }}>Service Centers</li>
              <li style={{ color: "#463527" }}>Extract from the archives</li>
            </ul>
            <ul>
              <li style={{ color: "#C0AF9F" }}>CONTACT</li>
              <li style={{ color: "#463527" }}>Contact</li>
              <li style={{ color: "#463527" }}>Careers</li>
              <li style={{ color: "#463527" }}>Press</li>
              <li style={{ color: "#C0AF9F" }}>FOLLOW US</li>
              <li style={{ color: "#463527" }}>Press Releases</li>
              <li style={{ cursor: "pointer" }}><FaInstagram className='icon' /><FaYoutube className='icon' /></li>
              <li style={{ color: "#463527" }}>SITE MAP</li>
            </ul>
          </div>
          
          <div className='line footer__line'></div>
          <p style={{ color: "#C0AF9F" }} className='footer__bottom'>[  LEGAL NOTICES  ]  -  <span>© 2024 PATEK PHILIPPE SA</span></p>
          <Link style={{ textDecoration: "none" }} to="/"><div className='footer__logo' ><Logo /></div></Link>
        </div>
      </div>
    </section>
  )
}

export default Footer