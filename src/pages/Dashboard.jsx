import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { DetailBox, WorldMap, Grid, LineChart } from '../components';
import styles from './Dashboard.module.css';
import { sortData } from '../helpers/util';
import 'leaflet/dist/leaflet.css';
import numeral from 'numeral';

function Dashboard() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});
  const [gridData, setGridData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState('cases');

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

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all')
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesInfo = async () => {
      await fetch('https://disease.sh/v3/covid-19/countries')
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            countryCode: country.countryInfo.iso3,
          }));

          const sortedData = sortData(data);
          setGridData(sortedData);
          setCountries(countries);
          setMapCountries(data);
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
            onClick={(e) => setCasesType('cases')}
            title="Infected"
            cases={numeral(countryInfo.todayCases).format('0,0')}
            total={numeral(countryInfo.cases).format('0,0')}
          />
          <DetailBox
            onClick={(e) => setCasesType('recovered')}
            title="Recovered"
            cases={numeral(countryInfo.todayRecovered).format('0,0')}
            total={numeral(countryInfo.recovered).format('0,0')}
          />
          <DetailBox
            onClick={(e) => setCasesType('deaths')}
            title="Deaths"
            cases={numeral(countryInfo.todayDeaths).format('0,0')}
            total={numeral(countryInfo.deaths).format('0,0')}
          />
        </div>
        <WorldMap
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <Card className={styles.dashboard__right}>
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Grid countries={gridData} />
          <h3>New Cases Worldwide</h3>
          <LineChart />
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
