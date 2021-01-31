import React from 'react';
import numeral from 'numeral';
import { Popup, Circle } from 'react-leaflet';
import '../components/Dashboard/Map.css';

const casesTypeColors = {
  cases: {
    hex: '#CC1034',
    rgb: 'rgb(204, 16, 52)',
    half_op: 'rgba(204, 16, 52, 0.5)',
    multiplier: 800,
  },
  recovered: {
    hex: '#7dd71d',
    rgb: 'rgb(125, 215, 29)',
    half_op: 'rgba(125, 215, 29, 0.5)',
    multiplier: 1200,
  },
  deaths: {
    hex: '#fb4443',
    rgb: 'rgb(251, 68, 67)',
    half_op: 'rgba(251, 68, 67, 0.5)',
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  return sortedData.sort((x, y) => (x.cases > y.cases ? -1 : 1));
};

export const circleDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) *
        casesTypeColors[casesType].multiplier *
        0.5
      }
    >
      <Popup>
        <div className="info_container">
          <div
            className="info_flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div>{country.country}</div>
          <div className="info_confirmed">
            Cases: {numeral(country.cases).format('0,0')}
          </div>
          <div className="info_deaths">
            Deaths: {numeral(country.deaths).format('0,0')}
          </div>
          <div className="info_recovered">
            Recovered: {numeral(country.recovered).format('0,0')}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
