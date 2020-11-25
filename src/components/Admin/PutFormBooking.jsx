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
        <Label htmlFor="date_begin">
          Départ
          <Input
            type="date"
            name="date_begin"
            id="date_begin"
            onChange={handleChange}
            value={form.date_begin}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="date_end">
          Retour
          <Input
            type="date"
            name="date_end"
            id="date_end"
            onChange={handleChange}
            value={form.date_end}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="id_travel">
          ID du voyage
          <Input
            type="number"
            name="id_travel"
            id="id_travel"
            onChange={handleChange}
            value={form.id_travel}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="id_user">
          ID de l&apos;utilisateur
          <Input
            type="number"
            name="id_user"
            id="id_user"
            onChange={handleChange}
            value={form.id_user}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="numberPerson">
          Nombre de personne(s)
          <Input
            type="select"
            name="numberPerson"
            id="numberPerson"
            onChange={handleChange}
            required
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </Label>
      </FormGroup>
    </Form>
  );
};

PutFormUsers.propTypes = {
  form: PropTypes.shape({
    date_begin: PropTypes.string.isRequired,
    date_end: PropTypes.string.isRequired,
    id_travel: PropTypes.number.isRequired,
    id_user: PropTypes.number.isRequired,
  }).isRequired,
  setForm: PropTypes.func.isRequired,
};

export default PutFormUsers;
