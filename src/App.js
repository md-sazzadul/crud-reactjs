import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(error => console.log(error))
  }

  const onAdd = async (name, username, email, phone, website) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => console.log(error));
  };

  const onEdit = async (id, name, username, email, phone, website) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => {
      // console.log(res);
      if (res.status !== 200) {
    
       return;
      } else {
        return res.json();
      }
    })
    .then(data => {
      // setUsers((users) => [...users, data]);
      const updatedUsers = users.map(user => {
        if (user.id === data.id) {
          user.name = data.name;
          user.username = data.username;
          user.email = data.email;
          user.phone = data.phone;
          user.website = data.website;
        }


        return user;
      })
      setUsers(updatedUsers);
      
    })
    .catch((error) => console.log(error));
  }

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={
          
              <Home 
                users = {users}
                onDelete={onDelete}>
              </Home>
           
              
          }></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path='/users/add' element={
            <AddUser onAdd={onAdd}></AddUser>
          }></Route>
          <Route path='/users/edit/:id' element={
              <EditUser
                onEdit={onEdit}>
              </EditUser>
          }></Route>
          <Route path='/users/:id' element={
              <User></User>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
