import { useRef, useEffect, useState } from 'react';
import type { ChartData, ChartArea } from 'chart.js';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { registerables } from 'chart.js';
ChartJS.register(...registerables);

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, '#07BB90');
  gradient.addColorStop(1, '#38EF7D');
  return gradient;
}

export function RatingChart(props: { rating: number }) {
  const { rating } = props;
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'doughnut'>>({
    datasets: [],
  });

  const options = {
    rotation: -90,
    circumference: 180,
    backgroundColor: '#303640',
    radius: 105,
    cutout: 44,
    aspectRatio: 2,
    endStyle: 'round',
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      datasets: [
        {
          data: [rating, 10 - rating],
          backgroundColor: [
            createGradient(chart.ctx, chart.chartArea),
            '#303640',
          ],
          borderRadius: {
            outerStart: 4,
            outerEnd: 4,
            innerStart: 4,
            innerEnd: 4,
          },
          borderWidth: 0,
        },
      ],
    };

    setChartData(chartData);
  }, []);

  return (
    <Chart ref={chartRef} type="doughnut" data={chartData} options={options} />
  );
}
