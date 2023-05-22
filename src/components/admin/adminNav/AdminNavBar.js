import { Link } from 'react-router-dom';
import { ReactComponent as Logout } from "../../../assets/icons/admin-logout.svg";
import TotalLogo  from "../../../assets/images/total_logo.png";
import { ReactComponent as User } from "../../../assets/icons/admin-user-icon.svg";
// import "../../../assets/styles/component/adminNavBar.scss"

const AdminNavBar = () => {
//   const adminDetails = useSelector((state) => state.adminDetails);
//   const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logout());
    console.log("logout")
  };

  return (
    <div className="adminnavbar">
      <Link to={{ name: 'LandingPage' }} className="__logo">
        <img src={TotalLogo} alt="total-logo" />
        <div className="img">
        </div>
      </Link>
      <div className="user__details">
        <div className="__left">
          <div className="__wrap">
            <h1>
              {/* {adminDetails && adminDetails.last_name && adminDetails.first_name && `${adminDetails.last_name} ${adminDetails.first_name}`} */}
            </h1>
            <div>
              <div className="__dot"></div>
              <p>Admin</p>
            </div>
          </div>
          <div className="profile__pic">
            <User/>
          </div>
        </div>
        <div className="__separator"></div>
        <div onClick={handleLogout} className="__logout-icon">
          <Logout/>
          <div className="logout__text">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
