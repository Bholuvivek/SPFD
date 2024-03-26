
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MyForm() {
  return (
    <form>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}

export default MyForm;
