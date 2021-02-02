import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';


export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn-X">X</button>
        </div>
        <div className="card-body">
        <Link to={`/ciudad/${id}`} style={{ textDecoration: 'none'}} >
          <h5 className="card-title">{name}</h5>
        </Link>
          <div className="row">
            <div>
              <p>min</p>
              <p>{min}°</p>
            </div>
            <div>
              <p>max</p>
              <p>{max}°</p>
            </div>
            <div >
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="110" height="110" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
