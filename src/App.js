import { useEffect, useState } from 'react';
import './App.css';
import BlogList from './components/BlogList'
import DeleteBlog from './components/DeleteBlog'
import store from "./models/store.js";

function App() {
  const {dispatch} = store;
  useEffect(() => {
    console.log("use effect app js")
    dispatch.count.getAllBlogs();
  },[])

  return (
    <div className="App">
        <header className="">
        </header>
        <div className='mainBody'>
          <BlogList />
          <DeleteBlog/> 
        </div>
    </div>
  );
}

export default App;
