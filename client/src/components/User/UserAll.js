import React,{useState,useEffect} from 'react'
import Navber from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function UserAll() {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch("http://localhost:5000/user/all");
          const jsonData = await response.json();
    
          console.log(jsonData);
          setTodos(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
      useEffect(() => {
        getTodos();
      }, []);
        
      return (
          <>
          <Navber />
          <h1 className="text-center">All Users</h1>
  <div className="container">
  <div className="card-deck justify-content-center">
  {todos.map((todo) => (
    <div className="col-sm-4" key={todo.user_id}>
      <div className="card bg-light border-danger mb-3">
      <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png"alt=""></img>
        <div className="card-body">
        <b>
        <div className="fa fa-envelope" style={{fontSize:"1.4vw"}}>  Email</div>
          <p className="card-title">{todo.email}</p>
          </b>
        </div>
      </div>
    </div>
  ))}
  </div>
  </div>
          <Footer />
          </>
    )
}

export default UserAll
