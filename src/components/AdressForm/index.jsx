import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function AdressForm({ handleSubmit, prevStep }) {
  const [name, setName] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [plz, setPlz] = useState('');
  const [city, setCity] = useState('');

  const handleName = (event) => setName(event.target.value);
  const handlePLZ = (event) => setPlz(event.target.value);
  const handleStreet = (event) => setStreet(event.target.value);
  const handleNumber = (event) => setNumber(event.target.value);
  const handleCity = (event) => setCity(event.target.value);

  const isNextButtonDisabled = !name || !street || !number || !plz || !city;
  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleSubmit({ name, street, number, plz, city });
        }}>
        <TextField type="string" id="name" label="Name" variant="outlined" fullWidth margin="dense" onChange={handleName} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            type="string"
            id="street"
            label="Street"
            variant="outlined"
            style={{ minWidth: '25rem', marginRight: '1rem' }}
            margin="dense"
            onChange={handleStreet}
          />
          <TextField type="number" id="number" label="Number" variant="outlined" margin="dense" onChange={handleNumber} />
        </div>
        <TextField type="string" id="plz" label="PLZ" variant="outlined" fullWidth margin="dense" onChange={handlePLZ} />
        <TextField type="string" id="city" label="City" variant="outlined" fullWidth margin="dense" onChange={handleCity} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" variant="outlined" disabled={isNextButtonDisabled}>
            Register now!
          </Button>
        </div>
      </form>
    </>
  );
}
