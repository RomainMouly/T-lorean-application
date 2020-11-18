import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import '../../assets/css/form.css';

const Form = ({ startDate, endDate, travel, peopleNumber }) => {
  const [form, setForm] = useState({
    lastname: '',
    firstname: '',
    email: '',
    avatar: '',
  });
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');
  const [userId, setUserId] = useState(0);

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de votre réservation : ${e.message}, veuillez réessayer`
    );
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidForm = () => {
    const reservation = {
      date_begin: format(startDate, 'yyyy-MM-dd'),
      date_end: format(endDate, 'yyyy-MM-dd'),
      id_travel: travel.id,
      id_user: userId,
      numberPerson: peopleNumber,
    };

    axios
      .post(
        'https://api-airbnb-node.herokuapp.com/api/reservations',
        reservation
      )
      .then(() =>
        setValidForm(
          `Félicitations ${form.firstname}, votre réservation a bien été prise en compte. Préparez-vous pour l'aventure !`
        )
      )
      .catch((err) => {
        handleErrorForm(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('https://api-airbnb-node.herokuapp.com/api/users', form)
      .then(() =>
        axios
          .get('https://api-airbnb-node.herokuapp.com/api/users')
          .then((result) => setUserId(result.data[result.data.length - 1].id))
          .catch((err) => {
            handleErrorForm(err);
          })
      )
      .catch((err) => {
        handleErrorForm(err);
      });

    setForm({ ...form, lastname: '', firstname: '', email: '', avatar: '' });
  };

  useEffect(() => {
    if (userId !== 0) {
      handleValidForm();
    }
  }, [userId]);

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
          <div className="form-data">
            <label htmlFor="payment">
              <input
                type="password"
                minLength="8"
                id="payment"
                name="avatar"
                placeholder="Carte Bancaire"
                onChange={handleChange}
                value={form.avatar}
                required
              />
            </label>
          </div>
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

Form.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  peopleNumber: PropTypes.number.isRequired,
  travel: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Form;
