import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function DoctorAdd(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [tenure, setTenure] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [available, setAvailable] = useState("");

    const handleClick=async(e)=>{
        e.preventDefault();
        const body={name,age,gender,tenure,specialization,available};
        console.log(body);

      fetch(`http://localhost:5000/doctor/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        let path=`/doctor/${result.rows[0].doctor_id}`;
		props.history.push(path);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    return (
        <>
        <Navber />
        <div className="container">
        <h1 className="text-center">Add a Doctor</h1>
         <form>
        <div className="form-group">
            <label >Name</label>
            <input type="text"onChange={e => setName(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Age</label>
            <input type="number" onChange={e => setAge(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Tenure</label>
            <input type="text" onChange={e => setTenure(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Specialization</label>
            <input type="text" onChange={e => setSpecialization(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Available</label>
            <input type="text" onChange={e => setAvailable(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        

        <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
        </form>   
        </div>
        <Footer />
        </>
    )
}

export default DoctorAdd
