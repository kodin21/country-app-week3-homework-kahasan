import './App.css';
import { useState, useEffect } from 'react';
import { Stack, Button } from '@chakra-ui/react';
import Card from './Card';

function App() {
  const [countries, setCountries] = useState([]);
  const [showCountries, setShowCountries] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <Stack
        mt="30px"
        justify="center"
        direction="row"
        spacing={4}
        align="center"
      >
        <Button
          onClick={() => {
            setShowCountries(true);
          }}
          colorScheme="teal"
          variant={showCountries ? 'solid' : 'outline'}
        >
          Ülke Listesi
        </Button>
        <Button
          onClick={() => {
            setShowCountries(false);
          }}
          colorScheme="teal"
          variant={!showCountries ? 'solid' : 'outline'}
        >
          İstatikler
        </Button>
      </Stack>
      <div className="App">
        {showCountries &&
          countries &&
          countries.map((country, index) => (
            <Card
              key={index}
              name={country.name}
              flag={country.flag}
              population={country.population}
              region={country.region}
              subregion={country.subregion}
              languages={country.languages}
              capital={country.capital}
            />
          ))}
        {}
      </div>
    </div>
  );
}

export default App;
