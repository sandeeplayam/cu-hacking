import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { DetailBox, WorldMap } from '../components';
import styles from './Dashboard.module.css';

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url =
      countryCode === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}?yesterday=true&strict=true`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
      });
  };

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

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__left}>
        <div className={styles.dashboard__header}>
          <h1>COVID-19 Tracker</h1>
          <div>
            <FormControl className="dashboard__dropdown">
              <Select
                variant="outlined"
                value={country}
                onChange={onCountryChange}
              >
                <MenuItem value="worldwide">Worldwide</MenuItem>
                {countries.map((country) => (
                  <MenuItem value={country.countryCode}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className={styles.dashboard__details}>
          <DetailBox
            title="Infected"
            cases={countryInfo.todayCases}
            total={countryInfo.cases}
          />
          <DetailBox
            title="Recovered"
            cases={countryInfo.todayRecovered}
            total={countryInfo.recovered}
          />
          <DetailBox
            title="Deaths"
            cases={countryInfo.todayDeaths}
            total={countryInfo.deaths}
          />
        </div>
        <WorldMap />
        {/* leaflet map */}
      </div>
      <Card className={styles.dashboard__right}>
        <CardContent>
          <h3>Live Cases by Country</h3>
          {/* Table */}
          <h3>New cases Worldwide</h3>
          {/* Chart */}
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
