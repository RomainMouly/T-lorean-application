import React, { useState } from 'react';
import '../../assets/css/Login/Login.css';
import PropTypes from 'prop-types';

const Login = ({ history }) => {
  const passwordAdmin = process.env.REACT_APP_MDP;
  const emailAdmin = process.env.REACT_APP_EMAIL;
  const adminPath = process.env.REACT_APP_ADMIN_URL;
  const [form, setForm] = useState({ password: '', email: '' });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (form.password === passwordAdmin && form.email === emailAdmin) {
      history.push(`/admin/${adminPath}`);
    } else {
      history.push('/');
    }
  };

  return (
    <div className="form login-form">
      <h1>T-LOREAN</h1>

      <form onSubmit={handleLogin}>
        <fieldset>
          <legend className="legendLogin">Vos Informations de connexion</legend>

          <div className="form-data">
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
                required
              />
            </label>
          </div>
          <div className="form-data">
            <label htmlFor="password">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Mot de passe"
                onChange={handleChange}
                value={form.password}
                required
              />
            </label>
          </div>
          <button type="submit" className="colorButton form-button">
            Valider
          </button>
        </fieldset>
      </form>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default Login;
