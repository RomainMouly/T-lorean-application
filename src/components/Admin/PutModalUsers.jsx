import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PutFormUsers from './PostFormUsers';

const PutModalUsers = (props) => {
  const { className, userId, userFirstname, userLastname, userEmail } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
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
      .put(`https://api-airbnb-node.herokuapp.com/api/travels/${userId}`, form)
      .then(() => setValidForm(`Le voyage a bien été enregistré !`))
      .catch((err) => {
        handleErrorForm(err);
      })
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
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Modification d&apos;un utilisateur
        </ModalHeader>
        <ModalBody>
          <PutFormUsers
            form={form}
            setForm={setForm}
            userId={userId}
            userFirstname={userFirstname}
            userLastname={userLastname}
            userEmail={userEmail}
          />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Utilisateur modifié</ModalHeader>
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

PutModalUsers.propTypes = {
  className: PropTypes.shape.isRequired,
  userId: PropTypes.number.isRequired,
  userFirstname: PropTypes.string.isRequired,
  userLastname: PropTypes.string.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default PutModalUsers;
