import { useEffect, useState } from 'react';
import {deleteBlogById, getAllBlogs} from '../../api/blogs'
import store from "../../models/store"



const DeleteBlog = () => {
    const {dispatch} = store;
    const [inputValue, updateInput] = useState("");

    const handleClick = ()=> {
        deleteBlogById(inputValue)
        dispatch.count.getAllBlogs();
        updateInput("");    
    }

    return <div className='deleteBlogBlock'>
        <input value={inputValue} onChange={(e) =>  updateInput(e.target.value)}/>
        <button onClick={handleClick}>delete blog via id</button>
    </div>
}

export default DeleteBlog;