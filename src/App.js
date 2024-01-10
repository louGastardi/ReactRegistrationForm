import { Container, Typography } from '@mui/material';
import RegisterForm from './components/RegisterForm';
import '@fontsource/roboto/500.css';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom={true} align="center">
        Register Form
      </Typography>
      <RegisterForm />
    </Container>
  );
}

export default App;
