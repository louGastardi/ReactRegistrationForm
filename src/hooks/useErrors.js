import { useState } from 'react';

export default function useErrors(validation) {
  const initialState = createInitialState(validation);
  const [error, setError] = useState(initialState);

  const handleValidation = (event) => {
    const { id, value } = event.target;
    const newState = { ...error };
    newState[id] = validation[id](value);
    setError(newState);
  };

  function canSubmit() {
    for (let i in error) {
      if (!error[i].valid) {
        return false;
      }
      return true;
    }
  }
  return [error, handleValidation, canSubmit];
}

function createInitialState(validation) {
  const initialState = {};
  for (let i in validation) {
    initialState[i] = { valid: true, text: '' };
  }
  return initialState;
}
