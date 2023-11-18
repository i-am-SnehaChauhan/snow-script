import React from 'react';
import "./Event.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Demo = () => {
  return (
    <div className="container text-center imagebox">
      <div className="row">
        <div className="col">
          <img src="https://alcyone713.github.io/gdsc-autumn-of-code/Assets/Vani.png" alt="Person 1" style={{ width: '80%', margin: 'auto' }} />
        </div>
        <div className="col">
          <img src="https://alcyone713.github.io/gdsc-autumn-of-code/Assets/Ritika.png" alt="Person 2" style={{ width: '80%', margin: 'auto' }} />
        </div>
        <div className="col">
          <img src="https://alcyone713.github.io/gdsc-autumn-of-code/Assets/Govind.png" alt="Person 3" style={{ width: '80%', margin: 'auto' }} />
        </div>
        <div className="col">
          <img src="https://alcyone713.github.io/gdsc-autumn-of-code/Assets/Vani.png" alt="Person 4" style={{ width: '80%', margin: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default Demo;
