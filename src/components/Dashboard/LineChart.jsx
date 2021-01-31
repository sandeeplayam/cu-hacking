import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import numeral from 'numeral';

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format('+0,0');
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          format: 'MM/DD/YY',
          tooltipFormat: 'll',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format('0a');
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType = 'cases') => {
  const chartData = [];
  let lastPoint;
  for (let date in data.cases) {
    if (lastPoint) {
      const newPoint = {
        x: date,
        y: data[casesType][date] - lastPoint,
      };
      chartData.push(newPoint);
    }
    lastPoint = data[casesType][date];
  }
  return chartData;
};

function LineChart({ casesType = 'cases' }) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=90')
        .then((response) => response.json())
        .then((data) => {
          let chartData = buildChartData(data);
          setChartData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <div>
      {chartData?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                backgroundColor: 'rgba(204, 16, 52, 0.5)',
                borderColor: '#CC1034',
                data: chartData,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineChart;
