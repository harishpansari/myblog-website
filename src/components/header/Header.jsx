import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="Header">
        <div className="headerTitle">
            <span className="headerTitleSm">React</span>
            <span className="headerTitleLg">Blogs</span>
        </div>
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg" alt="new" className="headerImg" />
    </div>
  )
}
