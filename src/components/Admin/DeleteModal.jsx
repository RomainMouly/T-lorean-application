import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteModal = (props) => {
  const { className, travel, travel_id } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };

  const deleteTravel = (travel_id) => {
    axios.delete(
      `https://api-airbnb-node.herokuapp.com/api/travels/${travel_id}`
    );
  };

  const handleDelete = () => {
    toggleNested();
    deleteTravel(travel_id);
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        x
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Suppression de donnée</ModalHeader>
        <ModalBody>
          Êtes-vous sûr de vouloir supprimer cette donnée ?
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Donnée supprimée</ModalHeader>
            <ModalBody>Votre donnée a bien été supprimée.</ModalBody>
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
          <Button color="primary" onClick={handleDelete}>
            Confirmer
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

DeleteModal.propTypes = {
  className: PropTypes.shape.isRequired,
};

export default DeleteModal;
