import { useState } from "react";
import TextInput from "../../Input/TextInput";
import Select from "../../Input/select";

const ProductForm = () => {
  const [showModal, setShowModal] = useState(true);
  const [message, setMessage] = useState("");
  const [productSelectedData, setProductSelectedData] = useState({
    specification: [],
  });
  const [updatingProduct, setUpdatingProduct] = useState(false);

  const update = () => {
    setUpdatingProduct(true);
    // Code to update product goes here
    setUpdatingProduct(false);
  };
  const options = [
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
    { value: "", label: "" },
  ];

  return (
    <div className="product-form">
      <h1>Create Product Certificate</h1>
      <form className="form">
        <div className="product-form-wrap">
          <div className="form-section">
            <Select label="Product" placeholder="Select" options={options} />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            {/* <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            /> */}
          </div>
            
          <div className="form-section2">
          {/* <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <Select label="Product" placeholder="Select" options={options} />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            /> */}
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
            <TextInput
              name="date"
              label="Username"
              value={[]}
              placeholder="User"
              onChange={() => {}}
            />
          </div>
        </div>
      </form>
      <div className="remark-wraper">
      <Select label="Remark" placeholder="Select" options={options} />
      <button className="btn">Save</button>
      </div>
    </div>


  );
};

export default ProductForm;
