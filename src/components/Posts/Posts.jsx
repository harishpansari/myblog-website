import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({wrote}) {
  return (
    <>
    <h2 className="postswrite">Write a post to view it here</h2>
    <div className="posts"> 
    {wrote.map((data) => (
        <Post wrote={(data)}/>
      ))}  
    </div>
    </>
  )
}
