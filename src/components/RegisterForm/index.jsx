import { Button, FormControlLabel, Switch, TextField } from '@mui/material';
import { useState } from 'react';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState(0);
  const [newsletter, setNewsletter] = useState(false);
  const [sales, setSales] = useState(true);
  const [error, setError] = useState({ cpf: { error: false, errorText: '' } });

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
    return;
  };
  const handleEmail = (event) => setEmail(event.target.value);
  const handleCpf = (event) => setCpf(event.target.value);
  const handleClick = (event) => {
    event.preventDefault();
    console.log(name, email, cpf, newsletter, sales);
    return;
  };
  const handleNewsletter = (event) => setNewsletter(event.target.checked);
  const handleSales = (event) => setSales(event.target.checked);

  const handleError = () => {
    if (cpf.length !== 11) {
      setError({ cpf: { error: true, errorText: 'The CPF needs to be 11 characters long!' } });
    } else {
      setError({ cpf: { error: false, errorText: '' } });
    }
  };

  return (
    <>
      <form>
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
          onBlur={handleError}
          error={error.cpf.error}
          helperText={error.cpf.errorText}
        />
        <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" checked={newsletter} onChange={handleNewsletter} />} />
        <FormControlLabel label="Sales" control={<Switch name="Sales" checked={sales} onChange={handleSales} />} />
        <Button variant="outlined" fullWidth onClick={handleClick}>
          Register now!
        </Button>
      </form>
    </>
  );
}
