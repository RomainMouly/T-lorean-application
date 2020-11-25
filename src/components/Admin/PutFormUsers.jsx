import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PutFormUsers = (props) => {
  const {
    form,
    setForm,
    userId,
    userFirstname,
    userLastname,
    userEmail,
  } = props;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get(`https://api-airbnb-node.herokuapp.com/api/travels/${userId}`)
      .then((result) => result.data)
      .then((data) => setForm(data));
  }, []);

  return (
    <Form className="travel-form">
      <FormGroup>
        <Label htmlFor="firstname">
          Prénom
          <Input
            type="text"
            name="firstname"
            id="firstname"
            onChange={handleChange}
            value="firstname"
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="lastname">
          Nom
          <Input
            type="text"
            name="lastname"
            id="lastname"
            onChange={handleChange}
            value="lastname"
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">
          E-mail
          <Input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value="email"
            required
          />
        </Label>
      </FormGroup>
    </Form>
  );
};

PutFormUsers.propTypes = {
  form: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  userFirstname: PropTypes.string.isRequired,
  userLastname: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default PutFormUsers;
