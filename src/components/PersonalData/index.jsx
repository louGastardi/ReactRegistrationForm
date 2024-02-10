import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import FormValidation from '../../context/FormValidation';
import useErrors from '../../hooks/useErrors';

export default function PersonalData({ handleSubmit }) {
  const validation = useContext(FormValidation);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState(0);
  const [newsletter, setNewsletter] = useState(false);
  const [sales, setSales] = useState(true);

  const handleName = (event) => setName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleCpf = (event) => setCpf(event.target.value);
  const handleNewsletter = (event) => setNewsletter(event.target.checked);
  const handleSales = (event) => setSales(event.target.checked);

  const [error, handleValidation, canSubmit] = useErrors(validation);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (canSubmit()) {
            handleSubmit({ name, email, cpf, newsletter, sales });
          }
        }}>
        <TextField id="name" label="Name" variant="outlined" fullWidth margin="dense" required onChange={handleName} />
        <TextField type="email" id="email" label="Email" fullWidth margin="dense" variant="outlined" onChange={handleEmail} />
        <TextField
          type="text"
          id="cpf"
          label="CPF"
          fullWidth
          margin="dense"
          variant="outlined"
          onChange={handleCpf}
          onBlur={handleValidation}
          error={error.cpf.error}
          helperText={error.cpf.errorText}
        />
        <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" checked={newsletter} onChange={handleNewsletter} />} />
        <FormControlLabel label="Sales" control={<Switch name="Sales" checked={sales} onChange={handleSales} />} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button type="submit" variant="outlined">
            Back
          </Button>

          <Button type="submit" variant="outlined">
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
