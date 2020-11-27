import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PutFormBooking from './PostFormBooking';

const PutModalBooking = (props) => {
  const {
    className,
    bookingId,
    bookingDateB,
    bookingDateE,
    bookingTravel,
    bookingUser,
    bookingPax,
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [form, setForm] = useState({
    date_begin: bookingDateB,
    date_end: bookingDateE,
    id_travel: bookingTravel,
    id_user: bookingUser,
    numberPerson: bookingPax,
  });

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de la modification de la réservation : ${e.message}, veuillez réessayer.`
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
      .put(
        `https://api-airbnb-node.herokuapp.com/api/reservations/${bookingId}`,
        form
      )
      .then(() => setValidForm(`La réservation bien été modifiée !`))
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
          Modification d&apos;une réservation
        </ModalHeader>
        <ModalBody>
          <PutFormBooking
            form={form}
            setForm={setForm}
            bookingId={bookingId}
            bookingDateB={bookingDateB}
            bookingDateE={bookingDateE}
            bookingTravel={bookingTravel}
            bookingUser={bookingUser}
            bookingPax={bookingPax}
          />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Réservation modifiée</ModalHeader>
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

PutModalBooking.propTypes = {
  className: PropTypes.shape.isRequired,
  bookingId: PropTypes.number.isRequired,
  bookingDateB: PropTypes.string.isRequired,
  bookingDateE: PropTypes.string.isRequired,
  bookingTravel: PropTypes.number.isRequired,
  bookingUser: PropTypes.number.isRequired,
  bookingPax: PropTypes.number.isRequired,
};

export default PutModalBooking;
