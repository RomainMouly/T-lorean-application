import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PostForm = (props) => {
  const {
    formPartOne,
    setFormPartOne,
    formPartTwo,
    setFormPartTwo,
    // travelID,
  } = props;

  const handleChangePartOne = (e) => {
    setFormPartOne({
      ...formPartOne,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePartTwo = (e) => {
    setFormPartTwo({
      url: e.target.value,
      id_travel: '',
    });
  };

  return (
    <Form className="travel-form">
      <FormGroup>
        <Label htmlFor="title">
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
        <Label htmlFor="description">
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
        <Label htmlFor="url">
          Photo 1
          <Input
            type="url"
            name="url"
            id="url"
            onChange={handleChangePartTwo}
            value={formPartTwo.url}
            required
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="era">
          Epoque
          <Input
            type="select"
            name="era"
            id="era"
            onChange={handleChangePartOne}
            required
          >
            <option value="Préhistoire">Préhistoire</option>
            <option value="Antiquité">Antiquité</option>
            <option value="Moyen-Âge">Moyen-Âge</option>
            <option value="Renaissance">Renaissance</option>
            <option value="Temps modernes">Temps modernes</option>
            <option value="Futur">Futur</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="level">
          Sensation
          <Input
            type="select"
            name="level"
            id="level"
            onChange={handleChangePartOne}
            required
          >
            <option value="1">Détente</option>
            <option value="2">Aventure</option>
            <option value="3">Extrême</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="country">
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
        <Label htmlFor="price">
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
