import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

import PutForm from './PutForm';

const PutModal = (props) => {
  const {
    className,
    travelId,
    travelDescription,
    travelTitle,
    travelEra,
    travelPrice,
    travelCountry,
    travelLevel,
  } = props;

  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);
  const [validForm, setValidForm] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const [formPartOne, setFormPartOne] = useState({
    title: travelTitle,
    description: travelDescription,
    era: travelEra,
    level: travelLevel,
    country: travelCountry,
    price: travelPrice,
  });

  const [pictureOne, setPictureOne] = useState('');
  const [pictureTwo, setPictureTwo] = useState('');
  const [pictureThree, setPictureThree] = useState('');

  const handleErrorForm = (e) => {
    setErrorForm(
      `Erreur lors de la modification du voyage : ${e.message}, veuillez réessayer.`
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
        `https://api-airbnb-node.herokuapp.com/api/travels/${travelId}`,
        formPartOne
      )
      // .then(() =>
      //   axios
      //     .get(
      //       `https://api-airbnb-node.herokuapp.com/api/travels/${travelId}/pictures`
      //     )
      //     .then((result) => result.data[0].id)
      //     .then((idPicOne) =>
      //       axios
      //         .put(
      //           `https://api-airbnb-node.herokuapp.com/api/pictures/${idPicOne}`,
      //           {
      //             url: pictureOne,
      //           }
      //         )
      //         .then(() =>
      //           axios.put(
      //             `https://api-airbnb-node.herokuapp.com/api/pictures/${idPicTwo}`,
      //             {
      //               url: pictureTwo,
      //             }
      //           )
      //         )
      //         .then(() =>
      //           axios.put(
      //             `https://api-airbnb-node.herokuapp.com/api/pictures/${idPicThree}`,
      //             {
      //               url: pictureThree,
      //             }
      //           )
      //         )
      //     )
      // )
      .then(() => {
        setValidForm(`Le voyage a bien été modifié !`);
      })
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
        <ModalHeader toggle={toggle}>Modification d&apos;un voyage</ModalHeader>
        <ModalBody>
          <PutForm
            formPartOne={formPartOne}
            setFormPartOne={setFormPartOne}
            travelId={travelId}
            travelTitle={travelTitle}
            travelDescription={travelDescription}
            travelEra={travelEra}
            travelLevel={travelLevel}
            travelCountry={travelCountry}
            travelPrice={travelPrice}
            pictureOne={pictureOne}
            setPictureOne={setPictureOne}
            pictureTwo={pictureTwo}
            setPictureTwo={setPictureTwo}
            pictureThree={pictureThree}
            setPictureThree={setPictureThree}
          />
          <br />
          <Modal
            isOpen={nestedModal}
            toggle={toggleNested}
            onClosed={closeAll ? toggle : undefined}
          >
            <ModalHeader>Voyage modifié</ModalHeader>
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

PutModal.propTypes = {
  className: PropTypes.string.isRequired,
  travelId: PropTypes.number.isRequired,
  travelDescription: PropTypes.string.isRequired,
  travelTitle: PropTypes.string.isRequired,
  travelPrice: PropTypes.number.isRequired,
  travelCountry: PropTypes.string.isRequired,
  travelLevel: PropTypes.number.isRequired,
  travelEra: PropTypes.string.isRequired,
};

export default PutModal;
