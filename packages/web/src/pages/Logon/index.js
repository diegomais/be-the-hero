import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('be-the-hero-id', id);
      localStorage.setItem('be-the-hero-name', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('There was an error. Please try again later.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>

          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Your ID"
          />
          <button className="button" type="submit">
            Sign In
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Create Your Profile
          </Link>
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}
