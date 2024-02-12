import { Step, StepLabel, Stepper, Typography } from '@mui/material';
import AdressForm from '../AdressForm';
import Content from '../Content';
import UserData from '../UserData';
import { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../../Congrats.json';

export default function RegisterForm({ validation, handleSubmit }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});

  const forms = [
    <UserData handleSubmit={collectData} validation={validation} />,
    <Content handleSubmit={collectData} prevStep={prevStep} />,
    <AdressForm handleSubmit={collectData} prevStep={prevStep} />,
    <>
      <Typography variant="h5" marginTop="5rem" align="center">
        Registration completed successfully!
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie animationData={animationData} style={{ maxWidth: '300px' }} />
      </div>
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

  function prevStep() {
    setStep(step - 1);
  }

  return (
    <>
      <Stepper activeStep={step}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Content</StepLabel>
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
