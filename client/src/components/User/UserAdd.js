import React,{useState} from 'react'
import Footer from '../Footer/Footer';
import Navber from '../Navbar/Navbar';

function UserAdd(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleClick=async(e)=>{
      e.preventDefault();
      const body={name,email,password};
      console.log(body);

    fetch(`http://localhost:5000/user/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      let path=`/user`;
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
        <h1>User sign up form</h1>
            <form>
            <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input type="text" onChange={e => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
    
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" onClick={handleClick} className="btn btn-primary">Submit</button>
</form> 
</div>
<Footer />
        </>
    )
}

export default UserAdd
