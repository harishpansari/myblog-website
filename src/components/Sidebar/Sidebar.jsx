import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About</span>
            <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg" alt="" className="sidebarImg" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore corporis sint mollitia accusamus iusto quaerat aliquam sunt!

            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">MUSIC</li>
                <li className="sidebarListItem">SPORT</li>
                <li className="sidebarListItem">TECH</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">follow us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
   
  )
}
