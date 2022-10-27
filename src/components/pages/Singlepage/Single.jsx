import Sidebar from "../../Sidebar/Sidebar"
import Singlepost from "../../singlePost/Singlepost"
import "./Single.css"

export default function Single(props) {
  return (
    <div className="single">
        <Singlepost/>
    <Sidebar/>
    </div>
  )
}
