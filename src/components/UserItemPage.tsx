import React, {FC, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IUser } from '../types/types';

interface UserItemPageParams {
    id: string 
}


const UserItemPage:FC = () => {

const [user, setUser] = useState<IUser | null>(null)
// const params = useParams<UserItemPageParams>() бьет ошибку ? 
const params = useParams()
const navigate = useNavigate()



useEffect( () => {
fetchUser()
}, [])

async function fetchUser() {
  try {
    const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
    setUser(response.data)
    console.log(response)
  } catch (e) {
    alert(e)
  }
}

  return (
     <div>
            <button onClick={() => navigate('/users')}>Back</button>
            <h1>User Page {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.name}
            </div>
     </div>
      
  );
}

export default UserItemPage;