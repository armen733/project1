import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    
    setState((prev) => ({ ...prev, [name]: value }));
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  }

  return (
    <div>
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form style={{display:"flex", flexDirection:"column", gap: "20px", padding:"20px"}}>
        <input
          type="number"
          name="number"
          placeholder="Card Number"
          value={state.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input type="text" 
        name='name'
        placeholder='Card Owner'
        value={state.name}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        />
        <input type="number" 
         placeholder='valid until'
         name='expiry'
         value={state.expiry}
         onChange={handleInputChange}
         onFocus={handleInputFocus}
        />
        <input type="number"
        name='cvc'
        placeholder='cvc'
        value={state.cvc}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
}

export default PaymentForm;