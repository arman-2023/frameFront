import { useEffect, useState } from 'react';
import {login, getAllUsers } from '../../api/user'


const Login = () => {
    const [user, updatUser] = useState("");
    const [pass, updatePass] = useState("");
    const [form, updateForm] = useState([]);
    const [users, setUsers] = useState([]);

    const handleClick = async ()=> {
        const token = await login(user,pass);
        const userList = await getAllUsers(token);
        setUsers(userList.data); 
    }

    return (
        <>
            <div className='formBlock'>
                    <input value={user} onChange={(e) => updatUser(e.target.value)} />
                    <input value={pass} onChange={(e) => updatePass(e.target.value)}/>
                    <button onClick={handleClick}>LOGIN</button>
            </div>
            {users.map(user => (  
            <li data-index={ user._id }>  
                <lu>User name : { user.name }</lu>
                <lu>Email : { user.email }</lu>
                <lu>createdAt : { user.createdAt }</lu>  
            </li>
            ))}  
        </>
    )
}

export default Login;
