import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PostForm from './PostForm';

const PostModal = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [travelID, setTravelID] = useState(0);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [formPartOne, setFormPartOne] = useState({
    title: '',
    description: '',
    era: '',
    level: '',
    country: '',
    price: '',
  });

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de votre réservation : ${e.message}, veuillez réessayer`
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

  const HandleSubmitPartTwo = () => {
    const pictures = {
      url: '',
      id_travel: travelID,
    };

    axios
      .post('https://api-airbnb-node.herokuapp.com/api/pictures', pictures)
      .then(() =>
        setValidForm(
          `Félicitations, votre réservation a bien été prise en compte. Préparez-vous pour l'aventure !`
        )
      )
      .catch((err) => {
        handleErrorForm(err);
      });
  };

  const handleSubmitPartOne = (e) => {
    e.preventDefault();
    axios
      .post('https://api-airbnb-node.herokuapp.com/api/travels', formPartOne)
      .then(() =>
        axios
          .get('https://api-airbnb-node.herokuapp.com/api/travels')
          .then((result) => setTravelID(result.data[result.data.length - 1].id))
          .catch((err) => {
            handleErrorForm(err);
          })
      )
      .catch((err) => {
        handleErrorForm(err);
      });
  };

  useEffect(() => {
    if (travelID !== 0) {
      HandleSubmitPartTwo();
    }
  }, [travelID]);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Ajouter
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ajout de donnée</ModalHeader>
        <ModalBody>
          <PostForm formPartOne={formPartOne} setFormPartOne={setFormPartOne} />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Donnée ajoutée</ModalHeader>
            <ModalBody>Votre donnée a bien été ajoutée.</ModalBody>
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
          <Button color="primary" onClick={handleSubmitPartOne}>
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
