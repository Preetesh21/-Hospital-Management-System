import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function AppointmentsGet() {

    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch("http://localhost:5000/appointments");
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
        <Footer />
        </>
    )
}

export default AppointmentsGet
