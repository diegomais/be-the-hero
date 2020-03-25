import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Sign In</h1>

          <input placeholder="Your ID" />
          <button className="button" type="submit">
            Sign In
          </button>

          <a href="/register">
            <FiLogIn size={16} color="#E02041" />
            Create Your Profile
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
