import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../../assets/css/Admin/PostForm.css';

const PutForm = () => {
  return (
    <Form className="travel-form">
      <FormGroup>
        <Label for="PutFormEmail">
          Nom du voyage
          <Input type="text" name="title" id="PutFormEmail" placeholder="" />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PutFormText">
          Description
          <Input
            type="textarea"
            name="description"
            id="PutFormText"
            placeholder=""
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PutFormSelect">
          Epoque
          <Input type="select" name="era" id="PutFormSelect">
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
        <Label for="PutFormSelect">
          Sensation
          <Input type="select" name="level" id="PutFormSelect">
            <option>Détente</option>
            <option>Aventure</option>
            <option>Extrême</option>
          </Input>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PutFormEmail">
          Lieu
          <Input type="text" name="country" id="PutFormEmail" placeholder="" />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="PutFormEmail">
          Price
          <Input type="number" name="price" id="PutFormEmail" placeholder="" />
        </Label>
      </FormGroup>
    </Form>
  );
};

export default PutForm;
