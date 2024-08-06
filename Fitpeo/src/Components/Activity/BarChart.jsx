import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ activityData }) {
  const [isMobile, setIsMobile] = useState();
  const highlightColor = 'rgba(112, 149, 255, 1)';
  const fadedBorder = 'rgba(128, 128, 128, 0.25)';

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const data = {
    labels: activityData.xLabels,
    datasets: [
      {
        label: '',
        data: activityData.dataSet,
        backgroundColor: highlightColor,
        borderRadius: 50,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            if (value > 15000) return '';
            return value >= 1000 ? value / 1000 + 'k' : value;
          },
          stepSize: 5000,
        },
        grid: {
          color: fadedBorder,
          lineWidth: 2,
        },
        border: {
          display: false,
        },
      },
      x: {
        ticks: {
          autoSkip: isMobile,
          stepSize: 2000,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return <Bar key={isMobile} data={data} options={options} />;
}
