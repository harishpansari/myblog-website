import "./post.css";

export default function Post() {
  return (
    <div className='post'>
        <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg" alt="new" className="postImg" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postcat">Post Category</span>
                
            </div>
            <span className="postTitle">Post title</span>
            
            <hr></hr>
            <span className="postDate">1 hour ago</span>
        </div>
    </div>
  )
}

