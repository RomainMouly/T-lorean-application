import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

const DeleteModalBooking = (props) => {
  const { className, bookingId } = props;
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

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_BACK}/reservations/${bookingId}`, {
      headers: { Accept: '*/*' },
    });
    toggleNested();
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        x
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Suppression d&apos;une réservation
        </ModalHeader>
        <ModalBody>
          Êtes-vous sûr de vouloir supprimer cette réservation ?
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Réservation supprimée</ModalHeader>
            <ModalBody>La réservation a bien été supprimée.</ModalBody>
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

DeleteModalBooking.propTypes = {
  className: PropTypes.shape.isRequired,
  bookingId: PropTypes.number.isRequired,
};

export default DeleteModalBooking;
