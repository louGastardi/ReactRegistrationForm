import { Button, FormControlLabel, Switch, Typography } from '@mui/material';
import { useState } from 'react';

export default function Content({ handleSubmit, prevStep }) {
  const [newsletter, setNewsletter] = useState(true);
  const [sales, setSales] = useState(false);

  const handleNewsletter = (event) => setNewsletter(event.target.checked);
  const handleSales = (event) => setSales(event.target.checked);

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit({ newsletter, sales });
        }}>
        <Typography variant="h5" margin="2rem" align="center">
          What sort of content do you wish from us?
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '5em' }}>
          <FormControlLabel label="Newsletter" control={<Switch name="Newsletter" checked={newsletter} onChange={handleNewsletter} />} />
          <FormControlLabel label="Sales" control={<Switch name="Sales" checked={sales} onChange={handleSales} />} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={prevStep} variant="outlined">
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
