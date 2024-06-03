import "./Nav.scss"
import LogoEmbelem from "../../assets/Logo_emblem.tsx";
import Logo from "../../assets/Logo.tsx";
import Search from "../../assets/Search.tsx";
import World from "../../assets/World.tsx";
import Heart from "../../assets/Heart.tsx";
import { NavLink, Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SearchPanel from "../search-panel/SearchPanel.tsx";

const Nav = () => {
  const {pathname} = useLocation();
  const [isNavPinned, setIsNavPinned] = useState<boolean>(false);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if(window.scrollY > 40){
      setIsNavPinned(true)
    }
    else{
      setIsNavPinned(false)
    }
  })


  return (
    <nav className="nav" id="nav" role="navigation" data-is-navbar-pinned={isNavPinned}>
      <div className="container container--sm">
        <div className="nav__wrapper">
          <div className="nav__top">
            <Link to="/" className="nav__logo">
              <Logo/>
            </Link>
          </div>
          <div className="nav__bottom">
            <ul className="nav__list">
                <li className={`list__item ${pathname === "/" ? "active" : ""}`}><NavLink className="navigation-home" to={"/"}> <span>Home</span> <LogoEmbelem/> </NavLink></li>
                <li className="list__item">Collections</li>
                <li className="list__item">Company</li>
                <li className="list__item">Retail&Service</li>
                <li className={`list__item ${isSearchActive ? "item-active" : ""}`} onClick={() => setIsSearchActive(!isSearchActive)}><Search/></li>
                <li className="list__item"><World/></li>
                <li className="list__item">  <Link style={{display:"flex"}} to="/like"><Heart/> <span>(0)</span></Link> </li>
            </ul>
            {isSearchActive && <SearchPanel setSearchActive={setIsSearchActive}/>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav