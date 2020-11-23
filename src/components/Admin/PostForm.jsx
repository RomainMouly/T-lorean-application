import React, { useState } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PostForm = () => {
  const [addForm, setAddForm] = useState({
    title: '',
    description: '',
    era: '',
    level: '',
    country: '',
    price: '',
  });

  // const [addPic, setAddPic] = useState({
  //   url: '',
  //   id_travel: '',
  // });

  const handleChange = (e) => {
    setAddForm({
      ...addForm,
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
            onChange={handleChange}
            value={addForm.title}
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
            onChange={handleChange}
            value={addForm.description}
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
            onChange={handleChange}
            required
          >
            <option value={addForm.era}>Préhistoire</option>
            <option value={addForm.era}>Antiquité</option>
            <option value={addForm.era}>Moyen-Âge</option>
            <option value={addForm.era}>Renaissance</option>
            <option value={addForm.era}>Temps modernes</option>
            <option value={addForm.era}>Futur</option>
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
            onChange={handleChange}
            required
          >
            <option value={addForm.level}>Détente</option>
            <option value={addForm.level}>Aventure</option>
            <option value={addForm.level}>Extrême</option>
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
            onChange={handleChange}
            value={addForm.country}
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
            onChange={handleChange}
            value={addForm.price}
            required
          />
        </Label>
      </FormGroup>
    </Form>
  );
};

export default PostForm;
