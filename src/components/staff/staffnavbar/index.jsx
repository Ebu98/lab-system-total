// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logout } from '../redux/actions';

import { ReactComponent as Logout } from "../../../assets/icons/logout.svg";
import TotalLogo  from "../../../assets/images/total_logo.png";
import { ReactComponent as User } from "../../../assets/images/user 1.svg";

import CreateTest from '../../admin/Test';
import ProductForm from '../certificate/productForm';

function NavBar() {
//   const userDetails = useSelector(state => state.adminDetails);
//   const dispatch = useDispatch();

//   const details = (key) => userDetails?.[key];

  return (
      <>
    <div className="nav__bar">
      <Link to={{ name: 'LandingPage' }} className="__logo">
        <img src={TotalLogo} alt="total-logo" />
      </Link>
      <div className="user__details">
        <div className="__left">
          <div className="__wrap">
            {/* <h1>{details('last_name')} {details('first_name')}</h1> */}
            <div>
              <div className="__dot"></div>
              {/* <p>{details('role')}</p> */}
            </div>
          </div>
          <div className="profile__pic">
              <User/>
          </div>
        </div>
        <div className="__separator"></div>
        <div onClick={() => {}} className="__logout-icon">
        <Logout/>
          <div className="logout__text">Logout</div>
        </div>
      </div>
      
    </div>
    <CreateTest/>
    </>
  );
}

export default NavBar;
