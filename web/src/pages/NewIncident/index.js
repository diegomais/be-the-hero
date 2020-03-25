import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ngoId = localStorage.getItem('be-the-hero-id');

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { title, description, value };
    try {
      await api.post('incidents', data, { headers: { Authorization: ngoId } });

      history.push('/profile');
    } catch (error) {
      alert('There was an error. Please try again.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Register New Incident</h1>
          <p>Describe the incident in detail to find a hero to solve it.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Back to Profile
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Incident title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value"
          />
          <button className="button" type="submit">
            Register Incident
          </button>
        </form>
      </div>
    </div>
  );
}
