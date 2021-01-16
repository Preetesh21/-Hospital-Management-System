import React,{useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';


function DoctorUpdate(props) {
    const id=props.match.params.id;

    const [available, setAvailable] = useState("");
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch(`http://localhost:5000/doctor/${id}`);
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

      const handleClick=async(e)=>{
        e.preventDefault();
        const body={available};
        console.log(body);
        const response = await fetch(`http://localhost:5000/doctor/update/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      let path=`/doctor/${id}`;
		console.log(path)
		props.history.push(path);
      }
    return (
        <>
        <Navber />
        <h1 className="text-center">Doctor ID -{id}</h1>
<div className="container">
<div className="card-deck justify-content-center">
{todos.map((todo) => (
  <div className="col-sm-4" key={todo.doctor_id}>
    <div className="card bg-light border-danger mb-3">
    <img className="card-img-top" src="https://www.w3schools.com/bootstrap4/img_avatar1.png"alt=""></img>
      <div className="card-body">
      <b>
        <h5 className="card-title">Name::{todo.name}</h5>
        <p className="card-text">Field:{todo.specialization}</p>
        <p className="card-text">Gender:{todo.gender}</p>
        <p className="card-text">Age:{todo.age}</p>
        <p className="card-text">Tenure:{todo.tenure}</p>
        <input type="text" onChange={e => setAvailable(e.target.value)} className="form-control" name="keyword" placeholder={todo.available.toString()} />
				<button className="btn btn-primary" onClick={handleClick}>Update</button>

        <p className="card-text">Available:{todo.available.toString()}</p></b>
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

export default DoctorUpdate
