import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PostForm = () => {
  return (
    <Form className="travel-form">
      <FormGroup>
        <Label for="PostFormEmail">
          Nom du voyage
          <Input type="text" name="title" id="PostFormEmail" />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormText">
          Description
          <Input type="textarea" name="description" id="PostFormText" />
        </Label>
      </FormGroup>

      <FormGroup>
        <Label for="PostFormSelect">
          Epoque
          <Input type="select" name="era" id="PostFormSelect">
            <option>Préhistoire</option>
            <option>Antiquité</option>
            <option>Moyen-Âge</option>
            <option>Renaissance</option>
            <option>Temps modernes</option>
            <option>Futur</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormSelect">
          Sensation
          <Input type="select" name="level" id="PostFormSelect">
            <option>Détente</option>
            <option>Aventure</option>
            <option>Extrême</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormEmail">
          Lieu
          <Input type="text" name="country" id="PostFormEmail" />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PostFormEmail">
          Price
          <Input type="number" name="price" id="PostFormEmail" />
        </Label>
      </FormGroup>
    </Form>
  );
};

export default PostForm;
