import satData from "./satData.js";
//import App from "./App.js";
//import React from 'react'
 
//import React from 'react'
//import App from './Tests/App';

 const Buttons = (props) => {
  const {filterByType, setSat, displaySats} = props;
  return (
  //<div>{props.filterType} {props.setSat} {props.displayStats}
<div>
   {displaySats.map((sat, id) => {
  return (
    <button onClick={() => filterByType(sat)} key={id}>
      {sat} Orbit
    </button>
  );
   })}
    <button onClick={() => setSat(satData)}></button>
  
  
      <button>All Orbits</button>
    </div>
  );
  };

export default Buttons;