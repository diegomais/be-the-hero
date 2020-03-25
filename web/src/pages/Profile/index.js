import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Welcome, APAD</span>
        <Link className="button" to="/incidents/new">
          Register New Incident
        </Link>
        <button type="button">
          <FiPower size={20} color="#E02041" />
        </button>
      </header>
      <h1>Registered incidents</h1>
      <ul>
        <li>
          <strong>INCIDENT:</strong>
          <p>Title</p>
          <strong>DESCRIPTION:</strong>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolores minima sequi nobis officia, quam ut inventore assumenda
            magnam voluptatum similique laborum cumque, quisquam est nam,
            corrupti neque eveniet quidem.
          </p>
          <strong>VALUE:</strong>
          <p>$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>INCIDENT:</strong>
          <p>Title</p>
          <strong>DESCRIPTION:</strong>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolores minima sequi nobis officia, quam ut inventore assumenda
            magnam voluptatum similique laborum cumque, quisquam est nam,
            corrupti neque eveniet quidem.
          </p>
          <strong>VALUE:</strong>
          <p>$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>INCIDENT:</strong>
          <p>Title</p>
          <strong>DESCRIPTION:</strong>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolores minima sequi nobis officia, quam ut inventore assumenda
            magnam voluptatum similique laborum cumque, quisquam est nam,
            corrupti neque eveniet quidem.
          </p>
          <strong>VALUE:</strong>
          <p>$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>INCIDENT:</strong>
          <p>Title</p>
          <strong>DESCRIPTION:</strong>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
            dolores minima sequi nobis officia, quam ut inventore assumenda
            magnam voluptatum similique laborum cumque, quisquam est nam,
            corrupti neque eveniet quidem.
          </p>
          <strong>VALUE:</strong>
          <p>$ 120,00</p>
          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
