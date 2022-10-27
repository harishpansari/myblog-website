import "./Write.css";
import React, { useState } from 'react';

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be empty");
        }
        
        wrote(title, desc);
        alert("Your blog is published")
    }
    const wrote=(title, desc)=>{
        let data=[];
        const mywrote={
          title1: title,
          desc1: desc,
        }

        const ktk=localStorage.getItem("kartik");
        if(ktk==null || ktk.length<0)
        {
            data.push(mywrote);
        }
        else{
            let dta=JSON.parse(ktk)
            dta.push(mywrote);
            data=dta;
        }
        
        localStorage.setItem('kartik', JSON.stringify(data));
        localStorage.getItem(ktk);
      }

    

  return(
    <div className="write">
        <img src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg" alt="new" className="writeImg"/>
        <form className="writeForm" onSubmit={submit}>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className= "writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="writeInput writeText"></textarea>
            </div>
            <button type="submit" className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
