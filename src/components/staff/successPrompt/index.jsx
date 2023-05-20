import React from "react";
import Modal from "../../../core/modal";
import { ReactComponent as Success } from "../../../assets/icons/success.svg";


const ModalSuccess = () => {
  return (
    <div>
      <Modal>
          <Success />
          <h2>Your Product Certificate Has Been Saved Successfully</h2>
          <div className="modal-btn">
              <button className="btn-view">View Product Certificate</button>
              <button className="back">Back to User Profile Page</button>
          </div>
        
      </Modal>
    </div>
  );
};

export default ModalSuccess;

