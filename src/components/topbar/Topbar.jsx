import "./topbar.css"
import {Link} from "react-router-dom";
export default function Topbar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                  <Link to="/">Home</Link>
                </li>
                <li className="topListItem">
                  <Link to="/about">About</Link>
                </li>
                
                <li className="topListItem">
                  <Link to="/write">Write</Link>
                </li>
                
            </ul>
            
        </div>
        <div className="topRight">
            <img className="topImg" src="soccer.webp" alt=""/>
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
