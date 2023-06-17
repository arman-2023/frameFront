export const getAllUsers = async (token) => {
    try {
        const response = await fetch(`http://localhost:3001/api/user/list?Authorization=${token}`);
        return await response.json();
    }catch(e){
        console.log(e)
    }
  }

export const login = async (user,pass) => {
  try {
    const data = JSON.stringify({userName:user,password:pass});
    const response = await fetch(`http://localhost:3001/api/user/login`, {
      method: 'POST',
      headers: {
          "Content-Type": "application/json",
          },
      body: data,
      });
    const jsonData = await response.json();
    return jsonData.accessToken;
  }
  catch(e){
      console.log(e)
  }
}