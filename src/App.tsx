import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import MainPage from './components/MainPage';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {





  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to={'/'}>Main</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'todos'}>Todos</Link>
        </div>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path={'/users'} element={<UserPage/>} />
          <Route path={'/todos'} element={<TodosPage/>} />
          <Route path={'/user/:id'} element={<UserItemPage/>} /> 
          <Route path={'/todo/:id'} element={<TodoItemPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
