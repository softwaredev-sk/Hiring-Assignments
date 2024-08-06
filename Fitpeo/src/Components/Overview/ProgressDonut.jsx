import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import classes from './Overview.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProgressDonut() {
  const data = {
    datasets: [
      {
        data: [70, 30], // Represents 70% completion
        backgroundColor: ['#7692ff', '#00000000'], // Colors for completed and remaining segments
        borderWidth: 0,
        borderRadius: 10, // Rounded edges for progress indicator
        cutout: '72%', // Size of the inner cutout
        radius: 44,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    rotation: -15, // Start angle
    circumference: 360, // Full circle to ensure complete coverage
  };

  return (
    <div
      className={classes.progressChart}
      style={{
        position: 'absolute',
        top: -13,
        left: -8,
        width: '106px',
        height: '106px',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 12,
      }}
    >
      {/* canvas for progress chart */}
      <Doughnut data={data} options={options} />
    </div>
  );
}
