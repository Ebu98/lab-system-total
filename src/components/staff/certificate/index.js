import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalLogo from "../../../assets/images/total_logo.png";

const Certificate = () => {
  return (
    <div className="container">
      <div className="logo-title-container">
        <div className="tittle">
          <div className="title-total-nigeria">
            <h2>TotalEnergies Marketing Nigeria PLC.</h2>
            <h3>Lagos Blenging Plant</h3>
          </div>
          <img src={TotalLogo} alt="total-logo" />
          <h1>CERTIFICATE OF ANALYSIS</h1>
        </div>
      </div>

      <div className="address">
        <table>
          <tr>
            <td>REPORT NO:</td>
            <td>LBP/LAB/RM/12345/20</td>
          </tr>
          <tr>
            <td>PRODUCT:</td>
            <td>150NS </td>
          </tr>
          <tr>
            <td>SOURCE:</td>
            <td>Isiaka Rabue</td>
            <td> iv</td>
          </tr>
          <tr>
            <td>ISSUE DATE:</td>
            <td>LBP/LAB/RM/12345/20</td>
          </tr>
          <tr>
            <td>ORDER NO:</td>
            <td>Isiaka Rabue</td>
          </tr>
        </table>
        <p>
          The undersigned hereby certifies the following data to be true
          specification of the obtained results of analysis
        </p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr className="header">
              <th>TEST</th>
              <th>UOM</th>
              <th>METHODS</th>
              <th>Specifications</th>
              <th>RESULT</th>
            </tr>
          </thead>
          <tbody className="body">
            <tr>
              <td>Appearance</td>
              <td></td>
              <td>Visual</td>
              <td>Clear</td>
              <td>BRIGHT AND CLEAR</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </table>
        <p>REMARK: ALL PARAMETERS ARE WITHIN CONTROL SPECIFICATIONS</p>
      </div>

      <div className="sign-wrap">
        <div className="sign">
          <p>............................</p>
          <h3 className="supervisor">Laboratory Supervisor</h3>
        </div>

        <button className="btn">Print Certificate</button>
        <div>
          <p>
            Lagos Blending Plant <br />
            4 Steve Ajose Street,Off Dillion Road,Kirikiri,Lagos
            <br /> +234- Lagos – NIGERIA
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
