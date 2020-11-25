import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PostForm from './PostForm';

const PostModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [formPartOne, setFormPartOne] = useState({
    title: '',
    description: '',
    era: 'Préhistoire',
    level: '1',
    country: '',
    price: '',
  });

  const [formPartTwo, setFormPartTwo] = useState({
    url: '',
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
      .post('https://api-airbnb-node.herokuapp.com/api/travels', formPartOne)
      .then(() =>
        axios
          .get('https://api-airbnb-node.herokuapp.com/api/travels')
          .then((result) => result.data[result.data.length - 1].id)
          .then((idTravel) =>
            axios
              .post('https://api-airbnb-node.herokuapp.com/api/pictures', {
                url: formPartTwo.url,
                id_travel: idTravel,
              })
              .then(() => setValidForm(`Le voyage a bien été enregistré !`))
              .catch((err) => {
                handleErrorForm(err);
              })
          )
      )
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
        <ModalHeader toggle={toggle}>Ajout d&apos;un voyage</ModalHeader>
        <ModalBody>
          <PostForm
            formPartOne={formPartOne}
            setFormPartOne={setFormPartOne}
            formPartTwo={formPartTwo}
            setFormPartTwo={setFormPartTwo}
          />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Voyage ajouté</ModalHeader>
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

PostModal.propTypes = {
  className: PropTypes.shape.isRequired,
};

export default PostModal;
