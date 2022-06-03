import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, Fragment } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Swal from 'sweetalert2';
//import { buildCard } from './CustomCards';

const user = {
  name: 'Arturo',
  lastname: 'Balderas',
  gamertag: 'artturobld'
}

const CreateUserName = (user) => {
  return `${user.name} ${user.lastname} ${user.gamertag}`;
}

const element = <div> <h1>Hello, {CreateUserName(user)}</h1> <h2>It is {new Date().toLocaleTimeString()}.</h2> </div>

function App() {
  return (
    //element
    <div>
      <Clock />
      <CustomForm />
      <LoggingButton />
      <ListsDemo />
      <DemoForm />
      <Calculator />
      <ExampleStateHook />
      <ExampleEffectHook />
    </div>
  );
}

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                Clock
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is an example of a timer with react components.
              </Typography>
              <Typography variant="body2">
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">https://es.reactjs.org/</Button>
            </CardActions>
          </React.Fragment>
        </Card>
      </div>
    );
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
    console.log(`Timer Started: ${this.timerID}`);
  }

}

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message1: 'To install Material UI -> npm install @mui/material @emotion/react @emotion/styled',
      message2: 'This is a custom Form from material UI: https://mui.com/material-ui/react-text-field/'
    }
  }

  render() {
    return (
      <div>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                CustomForm and Props
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is an example of a custom form with Material UI and props with react components.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {this.state.message1}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {this.state.message2}
              </Typography>
              <Typography variant="body2">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">https://es.reactjs.org/</Button>
            </CardActions>
          </React.Fragment>
        </Card>

      </div>
    );
  }
}

class LoggingButton extends React.Component {
  // Esta sintaxis nos asegura que `this` está ligado dentro de handleClick
  // Peligro: esto es una sintaxis *experimental*
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Logging Button
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This is an example of a button that once clicked logs to the console.
            </Typography>
            <Typography variant="body2">
              <Button variant="contained" onClick={this.handleClick}> Click me </Button>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://es.reactjs.org/</Button>
          </CardActions>
        </React.Fragment>
      </Card>

    );
  }
}

class ListsDemo extends React.Component {
  numbers = [1, 2, 3, 4, 5];

  NumberList = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()} >{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  render() {
    return (
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Lists
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This is an example of a lists with react components.
            </Typography>
            <Typography variant="body2">
              <this.NumberList numbers={this.numbers} />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://es.reactjs.org/</Button>
          </CardActions>
        </React.Fragment>
      </Card>

    );
  }
  // root.render(<NumberList numbers={numbers} />);
}

class DemoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    //Swal.fire(`A name was submitted: ${this.state.value}`)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `A name was submitted: ${this.state.value}`,
      showConfirmButton: false,
      timer: 1500
    })
    event.preventDefault();
  }

  render() {
    return (
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Demo Form
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This is an example of a demo form with react components and SweetAlert2.
            </Typography>
            <Typography variant="body2">
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Name" variant="outlined" value={this.state.value} onChange={this.handleChange} />
                <Button variant="contained" onClick={this.handleSubmit}> Display Name </Button>
              </Box>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://es.reactjs.org/</Button>
          </CardActions>
        </React.Fragment>
      </Card>

      //<form onSubmit={this.handleSubmit}>
      //  <label>
      //    Name:
      //    <input type="text" value={this.state.value} onChange={this.handleChange} />
      //  </label>
      //  <input type="submit" value="Submit" />
      //</form>
    );
  }
}

////////////////////////////////////////////// Converter Calculator Example //////////////////////////////////////////////

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h5" component="div">
                Temperature Calculator
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                This is an example of a calculator and eventhandlers with react components.
              </Typography>
              <Typography variant="body2">
                <TemperatureInput
                  scale="c"
                  temperature={celsius}
                  onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                  scale="f"
                  temperature={fahrenheit}
                  onTemperatureChange={this.handleFahrenheitChange} />
                <BoilingVerdict
                  celsius={parseFloat(celsius)} />
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">https://es.reactjs.org/</Button>
            </CardActions>
          </React.Fragment>
        </Card>

      </div>
    );
  }
}

////////////////////////////////////////////// Converter Calculator Example //////////////////////////////////////////////

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

////////////////////////////////////////////// Hooks //////////////////////////////////////////////

function ExampleStateHook() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Hooks useStatus
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This is an example of a useStatus hook with react components.
            </Typography>
            <Typography variant="body2">
              <Fragment>
                <p>You clicked {count} times</p>
                <Button variant="contained" onClick={() => setCount(count + 1)}> Click me </Button>
              </Fragment>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://es.reactjs.org/</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </div>
  );
}

function ExampleEffectHook() {
  const [count, setCount] = useState(0);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el título del documento usando la Browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              Hooks UseEffect
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              This is an example of a useEffect hook with react components.
            </Typography>
            <Typography variant="body2">
              <Fragment>
                <p>You clicked {count} times</p>
                <Button variant="contained" onClick={() => setCount(count + 1)}> Click me </Button>
              </Fragment>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">https://es.reactjs.org/</Button>
          </CardActions>
        </React.Fragment>
      </Card>

    </div>
  );
}

////////////////////////////////////////////// Hooks //////////////////////////////////////////////

//setInterval(App, 1000);

export default App;
