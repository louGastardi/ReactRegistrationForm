import { Button, FormControlLabel, Switch, TextField } from '@mui/material';

export default function RegisterForm() {
  return (
    <>
      <form>
        <TextField id="name" label="Name" variant="outlined" fullWidth margin="dense" required />
        <TextField type="email" id="email" label="Email" fullWidth margin="dense" variant="outlined" />
        <TextField type="number" id="cpf" label="CPF" fullWidth margin="dense" variant="outlined" />
        <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" defaultChecked />} />
        <FormControlLabel label="Sales" control={<Switch name="Sales" defaultChecked />} />
        <Button variant="outlined" fullWidth>
          Register now!
        </Button>
      </form>
    </>
  );
}
