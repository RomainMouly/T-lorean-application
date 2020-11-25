import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PostFormBooking from './PostFormBooking';

const PostModalBooking = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [form, setForm] = useState({
    date_begin: '',
    date_end: '',
    id_travel: '',
    id_user: '',
    numberPerson: '',
  });

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de l'enregistrement du voyage : ${e.message}, veuillez réessayer.`
    );
  };

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const handleSubmitPartOne = (e) => {
    e.preventDefault();
    axios
      .post(`https://api-airbnb-node.herokuapp.com/api/reservations`, form)
      .then(() => setValidForm(`La réservation a bien été enregistrée !`))
      .catch((err) => {
        handleErrorForm(err);
      });
  };

  const handleSubmit = (e) => {
    toggleNested();
    handleSubmitPartOne(e);
  };

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Ajouter
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajout d&apos;un utilisateur</ModalHeader>
        <ModalBody>
          <PostFormBooking form={form} setForm={setForm} />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Utilisateur ajouté</ModalHeader>
            <ModalBody>
              {validForm}
              {errorForm}
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleAll}>
                OK
              </Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Annuler
          </Button>{' '}
          <Button color="primary" onClick={handleSubmit}>
            Confirmer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

PostModalBooking.propTypes = {
  className: PropTypes.shape.isRequired,
};

export default PostModalBooking;
