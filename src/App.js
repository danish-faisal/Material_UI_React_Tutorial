import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SaveIcon from '@mui/icons-material/Save';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import React from 'react';
// import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import 'fontsource-roboto';
import Typography from '@mui/material/Typography';

// const useStyles = makeStyles({
//   root: {
//     background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
//     border: 0,
//     marginBottom: '15px !important',
//     borderRadius: '15px !important',
//     color: 'white !important',
//     padding: '5px 30px'
//   }
// });

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[400]
    }
  },
});


function ButtonStyled() {
  const style = {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: '15px',
    borderRadius: '15px',
    color: 'white',
    padding: '5px 30px'
  };
  return <Button sx={style}>Test Styled Button</Button>
}

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use MUI
          </Typography>
          <ButtonStyled />
          <TextField variant="filled" color="secondary" type="time" label="Time" />
          <TextField variant="outlined" color="primary" type="email" label="Email" placeholder="test@test.com" />
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
      </div >
    </ThemeProvider>
  );
}

export default App;
