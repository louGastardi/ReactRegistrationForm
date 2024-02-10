import { Button, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import FormValidation from '../../context/FormValidation';
import useErrors from '../../hooks/useErrors';

export default function UserData({ handleSubmit }) {
  const validation = useContext(FormValidation);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handlePasswordCheck = (event) => setPasswordCheck(event.target.value);
  const [error, handleValidation, canSubmit] = useErrors(validation);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (canSubmit()) {
            handleSubmit({ email, password });
          }
        }}>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="dense"
          onChange={handleEmail}
          onBlur={handleValidation}
          error={!error.email.valid}
          helperText={error.email.text}
        />
        <TextField
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          onChange={handlePassword}
          onBlur={handleValidation}
          error={!error.password.valid}
          helperText={error.password.text}
        />
        <TextField
          type="password"
          id="passwordCheck"
          label="Repeat Your Password"
          variant="outlined"
          fullWidth
          margin="dense"
          onChange={handlePasswordCheck}
          onBlur={handleValidation}
          error={!error.passwordCheck.valid}
          helperText={error.passwordCheck.text}
        />
        <Button type="submit" variant="outlined" align="right">
          Next
        </Button>
      </form>
    </>
  );
}
