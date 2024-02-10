import { Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import AdressForm from '../AdressForm';
import PersonalData from '../PersonalData';
import UserData from '../UserData';
import { useEffect, useState } from 'react';

export default function RegisterForm({ validation, handleSubmit }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const forms = [
    <UserData handleSubmit={collectData} validation={validation} />,
    <PersonalData handleSubmit={collectData} validation={validation} />,
    <AdressForm handleSubmit={collectData} validation={validation} />,
    <>
      <Typography variant="h5" margin="2rem" align="center">
        {' '}
        Registration completed successfully!
      </Typography>
      <Button variant="outlined" fullWidth>
        Go back
      </Button>
    </>,
  ];

  useEffect(() => {
    if (step === forms.length - 1) {
      handleSubmit(data);
    }
  });

  function collectData(collectedData) {
    setData({ ...data, ...collectedData });
    nextStep();
  }

  function nextStep() {
    setStep(step + 1);
  }

  return (
    <>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>ID</StepLabel>
        </Step>
        <Step>
          <StepLabel>Adress</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finish</StepLabel>
        </Step>
      </Stepper>
      {forms[step]}
    </>
  );
}
