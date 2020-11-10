import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/form.css';

const Form = () => {
  const [form, setForm] = useState({ lastname: '', firstname: '', email: '' });

  const handleChange = (e) => {
    // if (e.target.id === 'lastname') {
    //   setForm({
    //     ...form,
    //     lastname: e.target.value,
    //   });
    // } else if (e.target.id === 'firstname') {
    //   setForm({
    //     ...form,
    //     firstname: e.target.value,
    //   });
    // } else {
    //   setForm({
    //     ...form,
    //     email: e.target.value,
    //   });
    // } ou :
    setForm({
      ...form,
      [e.target.name]: e.target.value, //crochet car valeur dynamique (rien à voir avec un tableau)
      // Attention :
      // lastname: e.target.value,
      // firstname: e.target.value,
      // email: e.target.value,
    }); /*si on fait ceci : tous les champs ont la même valeur*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.firstname != '' && form.lastname != '' && form.email != '') {
      axios
        .post('https://api-airbnb-node.herokuapp.com/api/users', form)
        .then((res) => res.data)
        .then((data) => {
          alert(
            `Félicitation ${form.firstname}, votre réservation a bien été prise en compte. Préparez vous pour l'aventure!`
          );
        })
        .catch((e) => {
          console.error(e);
          alert(
            `Erreur lors de votre réservation : ${e.message}, veuillez réessayer`
          );
        });
    } else {
      alert(
        'Erreur. Pour finaliser votre réservation, veuillez remplir tous les champs'
      );
    }
    setForm({ ...form, lastname: '', firstname: '', email: '' });
  };

  return (
    <div className="form">
      <h1>Réserver votre voyage</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Vos Informations</legend>
          <div className="form-data">
            <label htmlFor="lastname">Nom</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={handleChange}
              value={form.lastname}
            />
          </div>

          <div className="form-data">
            <label htmlFor="firstname">Prénom</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={handleChange}
              value={form.firstname}
            />
          </div>

          <div className="form-data">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="form-data">
            <button className="colorButton form-button" onClick={handleSubmit}>
              Réserver
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
