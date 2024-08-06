import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import classes from './Overview.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

//progress chart using chartjs and react-chartjs-2
export default function ProgressDonut() {
  const data = {
    datasets: [
      {
        data: [70, 30], // It represents two portion for 70% and 30% respectively
        backgroundColor: ['#7692ff', '#00000000'], // Colors for completed and remaining portion
        borderWidth: 0,
        borderRadius: 10, // rounded edges for progress indicator
        cutout: '72%', // size of the inner circle
        radius: 44,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    rotation: -15, // starting angle
    circumference: 360, // full circumference to ensure complete circle is shown
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
