import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PostForm = (props) => {
  const { formPartOne, setFormPartOne } = props;

  const [formPartTwo, setFormPartTwo] = useState({
    url: '',
    id_travel: '',
  });

  const handleChangePartOne = (e) => {
    setFormPartOne({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form className="travel-form">
      <FormGroup>
        <Label for="PostFormText">
          Nom du voyage
          <Input
            type="text"
            name="title"
            id="title"
            onChange={handleChangePartOne}
            value={formPartOne.title}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Description
          <Input
            type="textarea"
            name="description"
            id="description"
            onChange={handleChangePartOne}
            value={formPartOne.description}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Photo 1
          <Input
            type="url"
            name="photoOne"
            id="photoOne"
            onChange=""
            value=""
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Photo 2
          <Input
            type="url"
            name="photoTwo"
            id="photoTwo"
            onChange=""
            value=""
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Photo 3
          <Input
            type="url"
            name="photoThree"
            id="photoThree"
            onChange=""
            value=""
            required
          />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="PostFormSelect">
          Epoque
          <Input
            type="select"
            name="era"
            id="era"
            onChange={handleChangePartOne}
            required
          >
            <option value={formPartOne.era}>Préhistoire</option>
            <option value={formPartOne.era}>Antiquité</option>
            <option value={formPartOne.era}>Moyen-Âge</option>
            <option value={formPartOne.era}>Renaissance</option>
            <option value={formPartOne.era}>Temps modernes</option>
            <option value={formPartOne.era}>Futur</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormSelect">
          Sensation
          <Input
            type="select"
            name="level"
            id="level"
            onChange={handleChangePartOne}
            required
          >
            <option value={formPartOne.level}>Détente</option>
            <option value={formPartOne.level}>Aventure</option>
            <option value={formPartOne.level}>Extrême</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Lieu
          <Input
            type="text"
            name="country"
            id="country"
            onChange={handleChangePartOne}
            value={formPartOne.country}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Price
          <Input
            type="number"
            name="price"
            id="price"
            onChange={handleChangePartOne}
            value={formPartOne.price}
            required
          />
        </Label>
      </FormGroup>
    </Form>
  );
};

PostForm.propTypes = {
  formPartOne: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    era: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  setFormPartOne: PropTypes.func.isRequired,
  formPartTwo: PropTypes.shape().isRequired,
  setFormPartTwo: PropTypes.func.isRequired,
};

export default PostForm;
