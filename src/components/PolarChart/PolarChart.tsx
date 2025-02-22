import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

type PolarChartProps = {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
    }[];
  };
  width?: number;
  height?: number;
}

const PolarChart = ({ data, width, height }: PolarChartProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Remove any existing content before rendering the chart
    d3.select(svgRef.current).selectAll('*').remove();

    // Define dimensions
    const svgWidth = width ?? 300;
    const svgHeight = height ?? 300;
    const radius = Math.min(svgWidth, svgHeight) / 2;

    // Create and center the SVG group
    const svg = d3
      .select(svgRef.current)
      .attr('width', svgWidth)
      .attr('height', svgHeight)
      .attr('background-color', 'white')
      .append('g')
      .attr('transform', `translate(${svgWidth / 2}, ${svgHeight / 2})`);

    // Extract dataset and colors from the provided data
    const dataset = data.datasets[0].data;
    const colors = data.datasets[0].backgroundColor;
    const numSlices = dataset.length;
    const angleSlice = (2 * Math.PI) / numSlices;
    const maxValue = d3.max(dataset) ?? 0;

    // Create a scale to map data values to radial lengths
    const radiusScale = d3.scaleLinear().domain([0, maxValue]).range([0, radius]);

    // For each data point, create an arc with:
    // - a constant angular width (angleSlice)
    // - an outer radius proportional to the data value
    dataset.forEach((d: any, i: number) => {
      const startAngle = i * angleSlice;
      const endAngle = (i + 1) * angleSlice;

      const arcGenerator = d3
        .arc()
        .innerRadius(0) // start at the center
        .outerRadius(radiusScale(d)) // scaled radius based on the data value
        .startAngle(startAngle)
        .endAngle(endAngle);

      svg
        .append('path')
        .attr('d', arcGenerator(d))
        .attr('fill', colors[i])
        .attr('stroke', '#fff')
        .attr('stroke-width', '1px');
    });
  }, [data, width, height]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: 'var(--Paper-shadow)'
    }}>
      <svg ref={svgRef}></svg>
      <Legend data={data} />
    </div>
  );
};

const Legend = ({ data }: PolarChartProps) => {
  const labels = data.labels;
  const colors = data.datasets[0].backgroundColor;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
      {labels.map((label: string, i: number) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: '15px',
          }}
        >
          <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: colors[i],
              marginRight: '5px',
            }}
          ></div>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

// Default props matching the example file
PolarChart.defaultProps = {
  width: 300,
  height: 300,
};

export default PolarChart;