import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Sign Up</h1>
          <p>
            Sign up, enter the platform and help people discover incidents in
            your NGO.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Sign In
          </Link>
        </section>

        <form>
          <input placeholder="Name of NGO" />
          <input type="email" placeholder="Email" />
          <input placeholder="WhatsApp" />
          <div className="input-group">
            <input placeholder="City" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
