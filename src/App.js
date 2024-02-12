import { Container, Typography } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import '@fontsource/roboto/500.css';
import { passwordValidation, passwordCheck, emailValidation } from './models/validation';
import FormValidation from './context/FormValidation';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom={true} align="center">
        Register Form
      </Typography>

      <FormValidation.Provider value={{ password: passwordValidation, passwordCheck: passwordCheck, email: emailValidation }}>
        <RegisterForm handleSubmit={onSubmitForm} />
      </FormValidation.Provider>
    </Container>
  );
}

function onSubmitForm(data) {
  console.log(data);
}
export default App;
