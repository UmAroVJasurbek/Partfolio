import { GrLinkNext } from "react-icons/gr";
import './Highlights.scss'
import { Link } from "react-router-dom";
import menu1 from '../../assets/images/menu1.jpg';
import menu2 from '../../assets/images/menu2.jpg';
import menu3 from '../../assets/images/menu3.jpg';

const Highlights = () => {
  return (
    <section className="menu" id="menu" role="navigation">
            <div className="container container--md">
                <div className="menu__wrapper">
                    <p>Current highlights</p>
                    <div className="line"></div>
                    <div className="menu__list">
                        <Link to={'/'}>
                            <div className="menu__item">
                                <p><span>new</span> / collection</p>
                                <div className="menu__img">
                                    <img src={menu1} alt="" />
                                    <button><GrLinkNext className="icon" /></button>
                                </div>
                                <p>new models 2024</p>
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div className="menu__item">
                                <p><span>new</span> / news</p>
                                <div className="menu__img">
                                    <img src={menu2} alt="" />
                                    <button><GrLinkNext className="icon" /></button>
                                   </div>
                                <p>World Time with date, ref. 5330G-001</p>
                            </div>
                        </Link>
                        <Link to={'/'}>
                            <div className="menu__item">
                                <p><span>new</span> / news</p>
                                <div className="menu__img">
                                    <img src={menu3} alt="" />
                                    <button><GrLinkNext className="icon" /></button>
                                </div>
                                <p>“Rare Handcrafts 2024” Exhibition / Geneva</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Highlights