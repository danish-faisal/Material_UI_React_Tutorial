import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(false);
  return (
    <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} color="secondary" inputProps={{
      'aria-label': 'secondary checkbox',
    }} icon={<DeleteIcon />} checkedIcon={<SaveIcon />} />} label="Checkbox Label" />
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CheckboxExample />
        <ButtonGroup variant="contained" size="large">
          {/* variant="contained" size="large" href="#" onClick={() => alert("Hello")} disabled  style={{ fontSize: 18 }} endIcon={<SaveAltIcon />}*/}
          <Button startIcon={<SaveIcon />} color="primary">
            Save
          </Button>
          <Button startIcon={<DeleteIcon />} color="secondary">
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
