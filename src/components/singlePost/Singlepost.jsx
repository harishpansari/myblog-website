import "./singlePost.css"


export default function Singlepost() {

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
            <img src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                post title
                <div className="singlePostedit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square" ></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlepostAuthor">Author: <b>Blog's writer</b></span>
                <span className="singlepostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                post desc
            </p>
        </div>
        </div>
    )
}
