// import React, { useState } from "react";
// import ProductInput from "./ProductInput";
// import Modal from "./Modal";

// const AdminProductWrap = ({
//   productCategory,
//   loadingProductCategory,
//   noProductName,
//   successAddingProduct,
//   updatingProductMessage,
//   productsInCategory,
//   productSpecifications,
//   loadingProduct,
//   addProduct,
//   editData,
//   productSelectedData,
//   deleteProduct,
// }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="admin__product-wrap">
//       <div className="loading__icon-wrap" style={{ display: loadingProductCategory ? "block" : "none" }}>
//         <div className="loading__icon">
//           <img src="../../assets/images/Spin.svg" alt="animated-spin-icon" />
//         </div>
//       </div>
//       <div style={{ display: loadingProductCategory ? "none" : "block" }} className="admin__product"/>
//         {/* Popups */}
//         <transition name="no-product-name">
//           <p className="admin__product-message" style={{ display: noProductName ? "block" : "none" }}>
//             You must add a product name
//           </p>
//         </transition>
//         <transition name="no-product-name">
//           <p className="admin__product-message" style={{ display: successAddingProduct ? "block" : "none" }}>
//             Successfully added {productCategory.product_type} product
//           </p>
//         </transition>
//         <transition name="no-product-name">
//           <p className="admin__product-message" style={{ display: updatingProductMessage ? "block" : "none" }}>
//             {this.message}
//           </p>
//         </transition>

//         {/* Heading */}
//         <div className="admin__product-heading stagger__in--1">
//           <div className="admin__product-heading-border"></div>
//           <p className="admin__product-heading-text">
//             {productCategory.product_type} Product Category
//           </p>
//         </div>

//         <div className="admin__product-section-description">
//           <p className="admin__product-section-description-left stagger__in--2">
//             Add Product Specifications
//           </p>
//           <div className="admin__product-section-description-right stagger__in--3">
//             <span>{productCategory.product_type} Products</span>
//             <div className="number">{productsInCategory.length}</div>
//           </div>
//         </div>

//         {/* Section */}
//         <div className="admin__product-section">
//           {/* Left section */}
//           <div className="admin__product-section-left stagger__in--2">
//             <div id="input-area-wrapper" className="admin__product-section-left-input-area">
//               {productSpecifications.map((spec, index) => (
//                 <div key={index} className="admin__product-section-left-input-area-row">
//                   <ProductInput
//                     onInput={(event) => input(event, index, 0)}
//                     labelName={spec.labelName[0]}
//                     placeholder={spec.placeholder[0]}
//                   />
//                   {spec.labelName[1] && (
//                     <ProductInput
//                       onInput={(event) => input(event, index, 1)}
//                       labelName={spec.labelName[1]}
//                       placeholder={spec.placeholder[1]}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>

//             <button
//               style={{ display: loadingProduct ? "none" : "block" }}
//               onClick={addProduct}
//               className="btn__centre"
//             >
//               Create Product
//             </button>
//             <div style={{ display: loadingProduct ? "block" : "none" }} className="loading-add

// <div className={productsInCategory.length === 0 ? "admin__product-section-right stagger__in--3" : ""}>
// {!productsInCategory.length ? (
//   <p>No Products added yet</p>
// ) : (
//   productsInCategory.map((product, index) => (
//     <div className="item" key={index}>
//       <span>
//         <span style={{ marginRight: "10px" }}>{index + 1}.</span>
//         {product.product_name}
//       </span>
//       <div
//         className="product__edit-delete"
//         onClick={() => editData(product)}
//       >
//         <div className="edit">
//           <img
//             src="../../assets/images/edit-icon.svg"
//             alt="edit icon"
//           />
//         </div>
//         <div className="delete" onClick={(e) => deleteProduct(e, product.id)}>
//           <img
//             src="../../assets/images/delete-icon.svg"
//             alt="delete icon"
//           />
//         </div>
//       </div>
//     </div>
//   ))
// )}
// </div>

// {showModal && (
// <Portal to="root">
//   <Modal showModal={showModal} onClose={() => setShowModal(false)}>
//     <p className="main__layout-title large">
//       Edit {productSelectedData.product_name}
//     </p>
//     <div className="main__layout-grid mb-1">
//       {productSelectedData.specification.map((spec, index) => (
//         <div key={index}>
//           <label htmlFor="">{spec.specification_name}</label>
//           <input
//             type="text"
//             placeholder={spec.specification_name}
//             value={spec.product_spec}
//             onChange={(e) => {
//               setProductSelectedData({
//                 ...productSelectedData,
//                 specification: productSelectedData.specification.map(
//                   (item, i) =>
//                     i === index
//                       ? { ...item, product_spec: e.target.value }
//                       : item
//                 ),
//               });
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   </Modal>
// </Portal>
// )}

// {!productsInCategory.length && (
// <div className="loading-add-product">
//   <img src="../../assets/images/Ripple.svg" alt="" />
// </div>
// )}

import { useState } from "react";
// import "../../../assets/styles/pages/adminProduct.scss";
import Select from "../../Input/select";

const AddProduct = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [igg, setIgg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [product, setProduct] = useState({
    name: "",
    source: "",
    issue_Date: "",
    order_No: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const staffDetails = {
      name: product.name,
      source: product.source,
      issue_Date: product.issue_Date,
      order_No: product.order_No,
    };
    // dispatch(createStaff(staffDetails));
  };

  const handleChange = (event) =>{
      const [name, value] = event.target
      setProduct(prevState => ({
          ...prevState, [name]: value
      }))
  }

  const handleDynamicMsg = (value) => {
    if (value === "Successfully registered staff") {
        setProduct("");
    }
  };

  const options = [
    { value: "", label: "Blend" },
    { value: "", label: "Additive" },
    { value: "", label: "Oil" },
  ];

  return (
    <div className="add-new-user-container">
      {/* <DynamicMsgComp show={dynamicMsg} handleDynamicMsg={handleDynamicMsg} /> */}

      <div className="add-new-user-wrapper">
        <form onSubmit={handleSubmit} className="add-new-user stagger__in--1">
          <p className="add-new-user__heading">Add Product</p>
          <div className="add-new-user__row">
            {/* <div className="add-new-user__wrapper">
              <Select
                label="Product Name"
                placeholder="Select"
                options={options}
              />
            </div> */}
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="phone"
                value={product.name}
                onChange={handleChange}
                required
              />
              <label
                className="add-new-user__wrapper__text"
                htmlFor="description"
              >
                Product Name
              </label>
            </div>

            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={product.source}
                onChange={handleChange}
                required
              />
              <label
                className="add-new-user__wrapper__text"
                htmlFor="source"
              >
                Source
              </label>
            </div>
          </div>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={product.issue_Date}
                onChange={handleChange}
                required
              />
              <label
                className="add-new-user__wrapper__text"
                htmlFor="issue_Date"
              >
                Issue Date
              </label>
            </div>
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={product.order_No}
                onChange={handleChange}
                required
              />
              <label
                className="add-new-user__wrapper__text"
                htmlFor="order_No"
              >
                Order No
              </label>
            </div>
          </div>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="phone"
                value={product.description}
                onChange={handleChange}
                required
              />
              <label
                className="add-new-user__wrapper__text"
                htmlFor="description"
              >
                Description
              </label>
            </div>

            <Select label="Category" placeholder="Select" options={options} />
          </div>
          <button className="add-new-user-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
