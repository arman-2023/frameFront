import { useEffect, useState } from 'react';
import {deleteBlogById, getAllBlogs} from '../../api/blogs'


const Login = () => {
    const [user, updatUser] = useState("");
    const [pass, updatePass] = useState("");
    const [form, updateForm] = useState([]);


    return (
        <div className='formBlock'>
                <input value={user} onChange={(e) => updatUser(e.target.value)} />
                <input value={pass} onChange={(e) => updatePass(e.target.value)}/>
                <button onClick={() => updateForm([user, pass])}>LOGIN</button>
        </div>
    )
}

export default Login;
