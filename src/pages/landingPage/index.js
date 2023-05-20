import { Link } from 'react-router-dom';
import { ReactComponent as WelcomeImg } from '../../assets/images/landPage.svg';
import { ReactComponent as AdminIcon } from '../../assets/images/admin-icon.svg';
import { ReactComponent as StaffIcon } from '../../assets/images/staff-icon.svg';

const LandingPage =() =>{
  return (
    <div className="landing__page-wraper">
    <div className="landing__page">
      <div className="login__as-wrapper">
        <div className="__item">
          <Link to="/login" className="__left">
            <p className="__text">Login as Staff</p>
          </Link>
          <div className="__right">
            <div>
                <StaffIcon/>
            </div>
          </div>
        </div>
        <div className="__item">
          <Link to="/admin-login" className="__left">
            <p className="__text">Login as Admin</p>
          </Link>
          <div className="__right">
            <div>
                <AdminIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LandingPage