import { Link } from 'react-router-dom';
import {ReactComponent as SearchIcon} from "../../assets/icons/search-icon.svg"
import Blend from "../../assets/images/base-oil.png"
import Blend2 from "../../assets/images/blend3.jpg"
import Additive from "../../assets/images/additive 1.png"

function SearchOrCreate() {
  return (
    <div className="search__wrapper">
      <p className="__heading">Search For A Product Certificate</p>
      <div className="search__area">
        <input type="text" placeholder="Search for a new product certificate..." />
        <div className="search__icon">
          <SearchIcon/>
        </div>
      </div>
      <p className="__or">OR</p>
      <div className="create__new">
        <div className="__text">
          <p>Create A New Product Certificate</p>
        </div>
        <Link to={"/tab"} tag="div" className="section__body">
          <div className="image">
            <img src={Blend2} alt="" />
          </div>
          <p className="section__one__name">BLEND</p>
        </Link>
        <Link to={{ path: '/user-profile/create-base-cert' }} tag="div" className="section__body">
          <div>
            <img src={Blend} alt="" />
          </div>
          <p className="section__one__name">BASE OIL</p>
        </Link>
        <Link to="#" tag="div" className="section__body">
          <div>
            <img src={Additive} alt="" />
          </div>
          <p className="section__one__name">ADDITIVE</p>
        </Link>
      </div>
    </div>
  );
}
export default SearchOrCreate;
