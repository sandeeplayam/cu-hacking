import React, { useEffect, useState } from 'react';
import { Select, MenuItem, FormControl } from '@material-ui/core';

function CountryForm() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');

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
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;

    setCountry(countryCode);
  };

  return (
    <div>
      <FormControl className="dashboard__dropdown">
        <Select variant="outlined" value={country} onChange={onCountryChange}>
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
