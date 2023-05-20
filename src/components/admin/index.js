import { prototype } from "any-promise";
import React, {useState} from "react";
import {ReactComponent as Ripple} from "../../assets/images/Ripple.svg"
import {ReactComponent as EyeIcon} from "../../assets/icons/eyeIcon.svg"
import TotalLogo  from "../../assets/images/total_logo.png";
import { ReactComponent as User } from "../../assets/images/user 1.svg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type , setType] = useState(password)



  const handleSubmit = (e) => {
    e.preventDefault();
    // login({ igg, password });
  };

  const login = ({ igg, password }) => {
    // code for login logic
  };

  const showHide = () => {
    type === "password" ? setType("text") : setType("password");
  };

  return (
    <div className="admin__form-wrapper">
      <div className="admin-section">
      <form onSubmit={handleSubmit} className="admin-login">
        <div className="login-logo">
          <img src={TotalLogo} alt="total-logo" />
        </div>
        <div className="igg__text-wrap">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="igg-input igg"
            required
          />
          <label htmlFor="igg" className="igg-text">
            <span className="inner">Email</span>
            <div className="icons">
              <svg
                class="icon"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="#4596D1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M17.7359 15.2986L14.3911 14.1837C14.3111 14.1568 14.2273 14.143 14.1428 14.1428H7.85716C7.77272 14.143 7.68889 14.1568 7.60887 14.1837L4.26408 15.2986C1.71611 16.1452 -0.00243741 18.5294 2.59489e-06 21.2143C2.59489e-06 21.6482 0.351778 22 0.785732 22H21.2143C21.6482 22 22 21.6482 22 21.2143C22.0024 18.5294 20.2839 16.1452 17.7359 15.2986Z"
                    fill="#4596D1"
                  />
                  <path
                    d="M10.9999 0C8.3963 0 6.28564 2.11065 6.28564 4.71428V7.85715C6.28822 10.4597 8.39736 12.5689 10.9999 12.5714C13.6025 12.5689 15.7116 10.4597 15.7142 7.85715V4.71428C15.7142 2.11065 13.6036 0 10.9999 0Z"
                    fill="#4596D1"
                  />
                </g>
              </svg>
            </div>
          </label>
        </div>
        <div className="igg__text-wrap">
          <input type="password" className="igg-input" value={password}
            onChange={(e) => setPassword(e.target.value)} required />
          <label htmlFor="igg" className="igg-text">
            <span className="inner">Password</span>
          </label>
          <div onClick={showHide} className="icons eye">
            <EyeIcon/>
          </div>
        </div>
        <button className="login__btn">
          LOGIN
        </button>
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;
