export const getAllBlogs = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/blogs");
        const jsonData = await response.json();
        debugger;
        return jsonData.data;
        
    }catch(e){
        console.log(e)
    }
  }

  export const deleteBlogById = async (id) => {
    try {
        const resp = fetch(`http://localhost:3001/api/blogs/${id}`, {
            method: 'DELETE',
          })
    }
    catch(e){
        console.log(e)
    }
  }