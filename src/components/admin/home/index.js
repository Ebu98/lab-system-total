import React, { useState, useEffect } from "react";
import  AdminHomeIcon from "../../../assets/images/image-footer.jpg";
import { ReactComponent as ProductIcon } from "../../../assets/icons/products-icon.svg";
import {ReactComponent as Spinner} from "../../../assets/images/Spin.svg"
// import "../../../assets/styles/pages/adminHome.scss"

const AdminHome = () => {

  const [staffs, setStaffs] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   dispatch(getAllStaffs());
  // }, [dispatch]);

  // useEffect(() => {
  //   setStaffs(allStaffs);
  // }, [allStaffs]);

  const pagination = {
    pageCount: Math.ceil(staffs.length / perPage),
    from: currentPage * perPage - perPage,
    to: currentPage * perPage,
  };

  const rangeData = [];
  const negativePoint = currentPage - 2;
  const positivePoint = currentPage + 2;
  for (let i = negativePoint; i <= positivePoint; i++) {
    rangeData.push(i);
  }
  const filteredRangeData = rangeData.filter((el) => el > 0);

  const paginatedData = staffs.slice(pagination.from, pagination.to);

  const handlePageToShow = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admin__home">
      <div className="admin__home-heading">
        <p className="admin__home-heading-text">Dashboard</p>
        <div className="admin__home-bg">
          <img src={AdminHomeIcon} alt="admin-home-bg"
            
          />
        </div>
      </div>

      
      <div className="contanier">
      <div className="admin__home-staff-updates-wrap" >
      <p className="admin__home-staff-n-updates-staff-heading">All Staffs</p>


      {staffs.length > 0 ? (
        <table className="fade-table-in">
          <thead>
            <tr>
              <th>Name</th>
              <th>IGG</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((data, index) => (
              <tr key={index}>
                <td>
                  {data.first_name} {data.last_name}
                </td>
                <td>{data.igg}</td>
                <td>{data.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <div className="admin__home-range">
          <span className="admin__home-range-count">
            Showing page {currentPage} of {pagination.pageCount}
          </span>
          </div>
          </div>
          
        <div className="wrapper">
        <p className="staff-update">Updates</p>
        <div className="staff-update">
          <div className="staff-body">
        <p className="staff-heading">All Staffs</p>
        <p className="staff-heading">All Staffs</p>
        <p className="staff-heading">All Staffs</p>
        <p className="staff-heading">All Staffs</p>
        </div>
        </div>
        </div>
        </div>
    </div>
  );
};
export default AdminHome;

