import video from "../../assets/videos/hero.mp4";
import "./Hero.scss";
import { Link } from "react-router-dom";
import { HiChevronDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <Link to="">
      <section className="hero" id="hero" role="banner">
        <video className="hero__video" autoPlay loop muted playsInline={true} src={video}></video>
          <div className="container container--lg">
            <div className="hero__wrapper">
                <h2>
                  world time with date 
                  <br />
                  ref.5330g-001
                </h2>
                <a href="#" className="link link--outline">Discover</a>
                <HiChevronDown className="hero__chevron"/>
            </div>
          </div>
      </section>
    </Link>
  )
}

export default Hero