import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function AdressForm({ handleSubmit, validation }) {
  const [name, setName] = useState('');
  const [cep, setCep] = useState(0);
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [city, setCity] = useState(0);

  const handleName = (event) => setName(event.target.value);
  const handleCEP = (event) => setCep(event.target.value);
  const handleStreet = (event) => setStreet(event.target.value);
  const handleNumber = (event) => setNumber(event.target.value);
  const handleCity = (event) => setCity(event.target.value);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit({ name, cep, street, number, city });
        }}>
        <TextField type="string" id="name" label="Name" variant="outlined" fullWidth margin="dense" required onChange={handleName} />
        <TextField type="number" id="cep" label="CEP" variant="outlined" fullWidth margin="dense" required onChange={handleCEP} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <TextField
            type="string"
            id="street"
            label="Street"
            variant="outlined"
            style={{ minWidth: '25rem', marginRight: '1rem' }}
            margin="dense"
            required
            onChange={handleStreet}
          />
          <TextField type="number" id="number" label="Number" variant="outlined" margin="dense" required onChange={handleNumber} />
        </div>
        <TextField type="string" id="city" label="City" variant="outlined" fullWidth margin="dense" required onChange={handleCity} />
        <Button type="submit" variant="outlined" fullWidth>
          Register now!
        </Button>
      </form>
    </>
  );
}
