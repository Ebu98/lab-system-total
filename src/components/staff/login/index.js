import { useState, useEffect } from "react";
import  TotalLogo  from "../../../assets/images/total_logo.png";
import { ReactComponent as User } from "../../../assets/images/user 1.svg";
import { ReactComponent as EyeIcon } from "../../../assets/icons/eye.svg";
import axios from "axios";
import { useNavigate} from "react-router";
import { setUserSession } from "../../../utils/common";


const StaffLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [error, setError] = useState(false);
  const [loading, setLoading] =useState(false);
  const [ ,setErrMsg] =useState('')


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    setError(true)
    axios.post("https://localhost:44309/api/Identity/SignIn", {
      email: email,
      password: password
    })
    .then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user)
      console.log("response",response)
      navigate("/")
    }).catch(err => {
              if (!err?.response) {
                  setErrMsg('No Server Response');
              } else if (err.response?.status === 400) {
                  setErrMsg('Missing Igg or Password');
              } else if (err.response?.status === 401) {
                  setErrMsg('Unauthorized');
              } else {
                  setErrMsg('Login Failed');
              }
    
  })
  }
  const showHide = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div className="container2">
      <div className="form-wraper">
    <form onSubmit={handleSubmit} className="staff-login">
      <div className="login-logo">
        <img src={TotalLogo} alt=""/>
      </div>
      <div className="igg__text-wrap">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="igg-input"
          required
        />
        <label htmlFor="email" className="igg-text">
          <span className="inner">Email</span>
          <div className="icons">
              <User/>
          </div>
        </label>
      </div>
      <div className="igg__text-wrap">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={type}
          className="igg-input"
          required
        />
        <label htmlFor="igg" className="igg-text">
          <span className="inner">PASSWORD</span>
        </label>
        <div onClick={showHide} className="icons eye">
          <EyeIcon/>
        </div>
      </div>
        <button type="submit" className="login__btn">LOGIN</button>
        
    </form>
    </div>
    </div>
  );
};

export default StaffLogin;
