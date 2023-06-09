import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css"

const Notfound = () => {
    const navigate = useNavigate();
    return (
      <div className="notfound">
        <h2>
          404 <span>page not found</span>
        </h2>
        <p>
          Click here to go to<i class="bi bi-chevron-double-down"></i>
        </p>
        <button onClick={() => navigate("myhome/home")}>home page</button>
      </div>
    );
}

export default Notfound;
