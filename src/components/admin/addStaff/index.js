import { useEffect, useState } from 'react';
// import "../../../assets/styles/pages/adminAddStaff.scss"

const AddNewUser = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [igg, setIgg] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');


  // useEffect({
  //   fetch(variables.API_URL + 'employee/addemployee', {
  //     method: 'POST',
  //     headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       first_name: firstName,
  //       last_name: lastName,
  //       igg: igg,
  //       email: email,
  //     })
  // })
  //     .then(res => res.json())
  //     .then((result) => {
  //         alert(result);
  //         refreshList();
  //     }, (error) => {
  //         alert('Failed');
  //     })
  // },[])


  const handleSubmit = e => {
    e.preventDefault();
    const staffDetails = {
      first_name: firstName,
      last_name: lastName,
      igg: igg,
      email: email,
    };
    // dispatch(createStaff(staffDetails));
  };

  const handleDynamicMsg = value => {
    if (value === 'Successfully registered staff') {
      setFirstName('');
      setLastName('');
      setIgg('');
      setEmail('');
    }
  };

  return (
    <div className="add-new-user-container">
      {/* <DynamicMsgComp show={dynamicMsg} handleDynamicMsg={handleDynamicMsg} /> */}

      <div className="add-new-user-wrapper">
        <form onSubmit={handleSubmit} className="add-new-user stagger__in--1">
          <p className="add-new-user__heading">Create New User</p>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="first_name">
                First Name
              </label>
            </div>
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="last_name">
                Last Name
              </label>
            </div>
          </div>
          <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={igg}
                onChange={e => setIgg(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="first_name">
                IGG
              </label>
            </div>
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="last_name">
                Email
              </label>
            </div>
            
            </div>
            <div className="add-new-user__row">
            <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="last_name">
                Phone
              </label>
          </div>
          <div className="add-new-user__wrapper">
              <input
                className="add-new-user__wrapper__input"
                type="phone"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <label className="add-new-user__wrapper__text" htmlFor="last_name">
                Password
              </label>
          </div>
          </div>
          <button  className="add-new-user-btn">
              Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
