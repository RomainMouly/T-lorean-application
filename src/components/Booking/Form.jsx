import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/css/form.css';

const Form = () => {
  const [form, setForm] = useState({
    lastname: '',
    firstname: '',
    email: '',
  });
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidForm = () => {
    setValidForm(
      `Félicitation ${form.firstname}, votre réservation a bien été prise en compte. Préparez-vous pour l'aventure !`
    );
  };

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de votre réservation : ${e.message}, veuillez réessayer`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api-airbnb-node.herokuapp.com/api/users', form)
      .then(() => handleValidForm())
      .catch((err) => {
        handleErrorForm(err);
      });

    setForm({ ...form, lastname: '', firstname: '', email: '' });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Vos Informations</legend>

          <div className="form-data">
            <label htmlFor="firstname">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Votre prénom"
                onChange={handleChange}
                value={form.firstname}
                required
              />
            </label>
          </div>

          <div className="form-data">
            <label htmlFor="lastname">
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Votre nom"
                onChange={handleChange}
                value={form.lastname}
                required
              />
            </label>
          </div>

          <div className="form-data">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Votre e-mail"
                onChange={handleChange}
                value={form.email}
                required
              />
            </label>
          </div>

          {/* <div className="form-data">
            <label htmlFor="avatar">
              <input
                type="text"
                id="avatar"
                name="avatar"
                placeholder="Carte Bancaire"
                onChange={handleChange}
                value={form.avatar}
                required
              />
            </label>
          </div> */}
          <div className="form-data">
            <button type="submit" className="colorButton form-button">
              Réserver
            </button>
          </div>
          <p>
            {validForm}
            {errorForm}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
