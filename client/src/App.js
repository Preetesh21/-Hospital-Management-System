import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />

      <Route path="/admin" component = {AdminLogin}/>

      <Route path="/user" component = {UserLogin}/>
      <Route path="/user/all" component = {UserAll}/>
      <Route path="/user/add" component = {UserAdd}/>

      <Route path="/patient" component={PatientHome} />
      <Route path="/patient/:id" component={PatientGet} />
      <Route path="/patient/add" component={PatientAdd} />
      <Route path="/patient/leave/:id" component={PatinetLeave} />

      <Route path="/hospital" component={HospitalHome} />
      <Route path="/hospital/:room_number" component={HospitalUpdate} />

      <Route path="/doctor" component = {DoctorHome} />
      <Route path="/doctor/:id" component = {DoctorGet} />
      <Route path="/doctor/find/:key" component = {DoctorFind} />
      <Route path="/doctor/add" component = {DoctorAdd} />
      <Route path="/doctor/update" component = {DoctorUpdate} />

      
      <Route path="/appointments" component = {AppointmentsHome} />
      <Route path="/appointments/:id" component = {AppointmentsGet} />
      <Route path="appointments/doctor/:id" component = {DoctorAppointments} />
      <Route path="/appointments/add/:id" component = {AppointmentsAdd} />
      
      
      <Route path="/History/" component = {HistoryHome} />
      <Route path="/History/:id" component = {HistoryGet} />
      <Route path="/History/patient/:key" component = {HistoryPatient} />
      <Route path="/History/add/:id" component = {HistoryAdd} />
      

    </Router>
    </div>
  );
}

export default App;
