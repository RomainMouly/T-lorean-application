import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PutFormUsers = (props) => {
  const { form, setForm } = props;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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
};

export default PutFormUsers;
