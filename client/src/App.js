import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import About from './components/About/About';

import AdminLogin from './components/Admin/AdminLogin';

import UserLogin from './components/User/UserLogin';
import UserAll from './components/User/UserAll';
import UserAdd from './components/User/UserAdd';

import PatientHome from './components/Patient/PatientHome';
import PatientGet from './components/Patient/PatientGet';
import PatientAdd from './components/Patient/PatientAdd';
import PatinetLeave from './components/Patient/PatientLeave';

import HospitalHome from './components/Hospital/HospitalHome';
import HospitalUpdate from './components/Hospital/HospitalUpdate';

import DoctorHome from './components/Doctor/DoctorHome';
import DoctorGet from './components/Doctor/DoctorGet';
import DoctorAdd from './components/Doctor/DoctorAdd';
import DoctorUpdate from './components/Doctor/DoctorUpdate';
import DoctorFind from './components/Doctor/DoctorFind';

import AppointmentsHome from './components/Appointments/AppointmentsHome';
import AppointmentsGet from './components/Appointments/AppointmentsGet';
import AppointmentsAdd from './components/Appointments/AppointmentsAdd';
import DoctorAppointments from './components/Appointments/DoctorAppointments';

import HistoryHome from './components/History/HistoryHome';
import HistoryGet from './components/History/HistoryGet';
import HistoryAdd from './components/History/HistoryAdd';
import HistoryPatient from './components/History/HistoryPatient';

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />

      <Route exact path="/admin" component = {AdminLogin}/>

      <Route exact path="/user" component = {UserLogin}/>
      <Route exact path="/user/all" component = {UserAll}/>
      <Route exact path="/user/add" component = {UserAdd}/>

      <Route exact path="/patient" component={PatientHome} />
      <Route exact path="/patient/:id" component={PatientGet} />
      <Route exact path="/patient/add" component={PatientAdd} />
      <Route exact path="/patient/leave/:id" component={PatinetLeave} />

      <Route exact path="/hospital" component={HospitalHome} />
      <Route exact path="/hospital/:room_number" component={HospitalUpdate} />

      <Route exact path="/doctor" component = {DoctorHome} />
      <Route exact path="/doctor/:id" component = {DoctorGet} />
      <Route exact path="/doctor/find/:key" component = {DoctorFind} />
      <Route exact path="/doctor/add" component = {DoctorAdd} />
      <Route exact path="/doctor/update" component = {DoctorUpdate} />

      
      <Route exact path="/appointments" component = {AppointmentsHome} />
      <Route exact path="/appointments/:id" component = {AppointmentsGet} />
      <Route exact path="appointments/doctor/:id" component = {DoctorAppointments} />
      <Route exact path="/appointments/add/:id" component = {AppointmentsAdd} />
      
      
      <Route exact path="/History/" component = {HistoryHome} />
      <Route exact path="/History/:id" component = {HistoryGet} />
      <Route exact path="/History/patient/:key" component = {HistoryPatient} />
      <Route exact path="/History/add/:id" component = {HistoryAdd} />
      

    </Router>
    </div>
  );
}

export default App;
