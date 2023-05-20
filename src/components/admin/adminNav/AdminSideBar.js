// import { useSelector, useDispatch } from 'react-redux';
// import { setProductCategory, setProductName } from '../store/actions';
import { ReactComponent as Home } from "../../../assets/images/home-icon.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/right-arrow.svg";
import { ReactComponent as AddUser } from "../../../assets/images/add-user.svg";
import { ReactComponent as ProductIcon } from "../../../assets/icons/products-icon.svg";
import {Link } from 'react-router-dom'
// import "../../../assets/styles/component/adminSidebar.scss"    

const AdminSidebar = () => {
  // const dispatch = useDispatch();
  // const productName = useSelector((state) => state.productName);
  // const productCategory = useSelector((state) => state.productCategory);

  // const products = ['Blend', 'Additive', 'Base oil'];

  // const setProductType = () => {
  //   dispatch(setProductCategory({ product_type: productCategory }));
  // };

  // const scrollToTop = (product) => {
  //   // implement scroll to top logic
  // };

  // const successAddingProduct = useSelector((state) => state.successAddingProduct);
  // useEffect(() => {
  //   if (successAddingProduct) {
  //     scrollToTop(product);
  //   }
  // }, [successAddingProduct]);

  // useEffect(() => {
  //   dispatch(setProductName(null));
  //   dispatch(setProductCategory({}));
  //   return () => {
  //     dispatch(setProductName(null));
  //     dispatch(setProductCategory({}));
  //   };
  // }, []);

  return (
    <div className="admin-sidebar">
      <Link to="/" className="admin-sidebar-icons__wrapper">
        <p className="admin-sidebar-text">Home</p>
        <div className="admin-sidebar-icons">
          <Home/>
        </div>
      </Link>
      <Link to="/add-user" className="admin-sidebar-icons__wrapper">
        <p className="admin-sidebar-text">Add New User</p>
        <div className="admin-sidebar-icons">
          <AddUser/>
        </div>
      </Link>

      <div className="admin-sidebar-icons__surround">
          <Link to="/tab">
          <div className="admin-sidebar-icons">
            <ProductIcon/>
          </div>
          </Link>

        {/* <div className="admin-sidebar-product-category-wrapper" style={{ '--order': products.length }}>
          {products.map((product, index) => (
            <div key={index} onClick={setProductType}>
              <Link
                to={{ pathname: '/admin-dashboard/product', query: { name: product } }}
                className={`admin-sidebar-product-category ${$route.query.name === product ? 'admin-sidebar-product-category-active' : ''}`}
              >
                {product}
              </Link>
            </div>
          ))} */}
        {/* </div> */}
      </div>
    </div>
  );
};
export default AdminSidebar