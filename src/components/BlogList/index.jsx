import { useEffect, useState } from 'react';
import {allBlogs} from '../../api/blogs'
import './style.css';
import Blog from '../Blog'

const BlogList = (blog) => {
    return <div className='blogList'>
        <Blog/>
    </div>

}

export default BlogList;