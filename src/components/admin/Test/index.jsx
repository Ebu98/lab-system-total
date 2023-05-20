import { useState } from 'react';

const CreateTest = () => {

  const [productTest, setProductTest] = useState({
    name: "",
    uom: "",
    method: "",
    specification: "",
    result: "",
  });
  const handleChange = () =>{

  }

  const handleSubmit = e => {
    e.preventDefault();
    const testfDetails = {
      name: productTest.name,
      uom: productTest.uom,
      method: productTest.method,
      specification: productTest.specification,
      result: productTest.result,
    };
    // dispatch(createStaff(staffDetails));
  };

  const handleDynamicMsg = value => {
    if (value === 'Successfully registered staff') {
      setProductTest('')
    }
  };

  return (
    <div className="add-new-user-container">
      {/* <DynamicMsgComp show={dynamicMsg} handleDynamicMsg={handleDynamicMsg} /> */}

      <div className="add-new-user-wrapper">
        <form onSubmit={handleSubmit} className="add-new-user stagger__in--1">
          <p className="add-new-user__heading">Add Test</p>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={productTest.name}
                onChange={handleChange}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="first_name">
                Test-Name
              </label>
            </div>
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={productTest.uom}
                onChange={handleChange}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="last_name">
                UNITS
              </label>
            </div>
          </div>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={productTest.method}
                onChange={handleChange}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="first_name">
                METHODS
              </label>
            </div>
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={productTest.specification}
                onChange={handleChange}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="specification">
                Product Specification
              </label>
            </div>
            </div>
            <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={productTest.result}
                onChange={handleChange}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="result">
                Results
              </label>
            </div>
            
            </div>
            
          <button  className="add-new-user-btn">
              Create Test
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTest;
