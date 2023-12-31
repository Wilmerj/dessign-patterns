import * as React from 'react';
import './style.css';
import TemperatureConverter, {
  Fahrenheit,
  Kelvin,
} from './TemperatureConverter';

export default function App() {
  return (
    <TemperatureConverter
      renderKelvin={({ value }) => <Kelvin value={value} />}
      renderFahrenheit={({ value }) => <Fahrenheit value={value} />}
    />
  );
}
