import React, { useState } from 'react';
const Tab = `
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;
const ButtonGroup = `
  display: flex;
`;
const types = ['Cash', 'Credit Card', 'Bitcoin'];
function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div style={{ display:"flex", gap:"20px"}}>
      <button style={{ display:"flex",flexDirection:"column", gap:"50px", border:"none" }}>
        {types.map(type => (
          <tab
          
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </tab>
        ))}
      </button>
      <p>  {active} </p>
    </div>
  );
}
export default TabGroup