import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card, { CardVariant } from './components/Card';
import TodoItem from './components/TodoItem';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import UserItem from './components/UserItem';

function App() {
 const [users, setUsers] = useState<IUser[]>([])
 const [todos, setTodos] = useState<ITodo[]>([])

useEffect( () => {
fetchUsers()
fetchTodos()
}, [])

async function fetchUsers() {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
    console.log(response)
  } catch (e) {
    alert(e)
  }
}

async function fetchTodos() {
  try {
    const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    setTodos(response.data)
    console.log('setTodos',response)
  } catch (e) {
    alert(e)
  }
}

  return (
    <div className="App">
      Hi Ts
      <Card onClick={(num) => console.log('num', num)} variant={CardVariant.primary} width='200px' height='200px'  > 
      sfsdfsd
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}/>

    </div>
  );
}

export default App;
