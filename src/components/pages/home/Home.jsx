import { useEffect } from "react"
import Header from "../../header/Header"
import Posts from "../../Posts/Posts"
import Sidebar from "../../Sidebar/Sidebar"
import "./home.css"
import { useState } from "react"


export default function Home() {
  const [wrotes, setWrotes]= useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('kartik'));
    if (items) {
      setWrotes(items);
    }
  }, []);

  return (

    <>
    <Header/>
    
    <div className="home">
        <Posts wrote={wrotes}/>
        <Sidebar/>
        
    </div>
    </>
  )
}
