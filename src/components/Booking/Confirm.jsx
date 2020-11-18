import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import Form from './Form';

const Confirm = ({ travel, startDate, endDate, peopleNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="colorButton"
        id="bookingOk"
        tabIndex="0"
        onClick={toggle}
        onKeyDown={toggle}
        role="button"
        style={{ marginBottom: '1rem' }}
      >
        Valider et payer
      </div>
      <Collapse isOpen={isOpen}>
        <Form
          startDate={startDate}
          endDate={endDate}
          travel={travel}
          peopleNumber={peopleNumber}
        />
      </Collapse>
    </div>
  );
};

Confirm.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  peopleNumber: PropTypes.number.isRequired,
  travel: PropTypes.shape().isRequired,
};

export default Confirm;
