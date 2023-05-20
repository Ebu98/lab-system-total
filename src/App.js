import "./index.css"
import {  Route, Routes} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import AdminLogin from './components/admin';
import Modal from './core/modal'; 
import StaffLogin from './components/staff/login';
import AddNewUser from "./components/admin/addStaff";
import AdminHome from "./components/admin/home";
import Certificate from "./components/staff/certificate";
import SearchOrCreate from "./components/staff/SearchOrCreate";
import ProductForm from "./components/staff/certificate/productForm";
import Layout from "./components/Layout";
import ModalSuccess from "./components/staff/successPrompt";
import NavBar from "./components/staff/staffnavbar";
import TabGroup from "./core/tab";
import CreateTest from "./components/admin/Test";
import AddProduct from "./components/admin/AdminProduct";



const App = () => {
    
  return (
      <div>
      <Routes>
        <Route exact path="/land" element={<LandingPage/>} />
        <Route exact path="/login" element={<StaffLogin/>}  />
        <Route
          exact
          path="/admin-login"
          element={<AdminLogin/>} 
        />
        <Route path="/" element={<Layout/>}>
        <Route exact path="/" element={<AdminHome/>}  />
        <Route
          exact
          path="/modal"
          element={<ModalSuccess/>} 
        />
        <Route exact path="/tab" element={<AddProduct/>} />
          <Route exact path="/add-user" element={<AddNewUser/>} />
        </Route>
        
          <Route exact path="/result" element={<Certificate/>} />
          
          <Route exact path="/product" element={<SearchOrCreate/>} /> 
          <Route exact path="/nav" element={<NavBar/>} />
          <Route path="/test" element={<CreateTest/>}/> 
      </Routes>
      </div>
  );
};

export default App;


