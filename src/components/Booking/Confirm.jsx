import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import Form from './Form';

const Confirm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="colorButton"
        id="bookingOk"
        onClick={toggle}
        style={{ marginBottom: '1rem' }}
      >
        Valider et payer
      </div>
      <Collapse isOpen={isOpen}>
        <Form />
      </Collapse>
    </div>
  );
};

export default Confirm;
