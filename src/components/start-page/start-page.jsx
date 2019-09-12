import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div>
      This is the starting page
      <p>Please go to the following pages</p>
      <ul>
        <li>
          <Link to="/calculator">Calculators</Link>
        </li>
      </ul>
    </div>
  );
};

export default StartPage;
