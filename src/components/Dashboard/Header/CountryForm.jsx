import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

function CountryForm() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesInfo = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            countryCode: country.countryInfo.iso3,
          }));

          setCountries(countries);
        });
    };

    getCountriesInfo();
  });
  return (
    <div>
      <FormControl className="app__dropdown">
        <Select variant="filled">
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country) => (
            <MenuItem value={country.countryCode}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CountryForm;
