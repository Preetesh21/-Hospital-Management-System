import React,{Fragment,useState,useEffect} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function PatientAdd(props) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [disease, setDisease] = useState("");
    const [type, setType] = useState("");

    const handleClick=async(e)=>{
        e.preventDefault();
        const body={name,age,gender,address,disease,contact,type};
        console.log(body);

      fetch(`http://localhost:5000/patient/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
        let path=`/patient/${result.rows[0].patient_id}`;
		props.history.push(path);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    return (
        <>
        <h1>fyvgbuhinjm</h1>
        <div className="container">
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
            <label >Gender</label>
            <input type="text" onChange={e => setGender(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Address</label>
            <input type="text" onChange={e => setAddress(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Disease</label>
            <input type="text" onChange={e => setDisease(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Contact</label>
            <input type="phone" onChange={e => setContact(e.target.value)} className="form-control" placeholder="Enter here" />
        </div>
        <div className="form-group">
            <label >Type of Room</label>
            <input type="text" onChange={e => setType(e.target.value)} className="form-control" placeholder="Enter here" />
            <small>Kindly be specific either "Private" or "Non-Private"</small>
        </div>

        <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
        </form>   
        </div>
        </>
    )
}

export default PatientAdd
