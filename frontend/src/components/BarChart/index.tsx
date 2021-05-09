import Chart from 'react-apexcharts';


const BarChart = () => {
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [23.6, 67.6, 68.7, 85.6, 71.1]                   
            }
        ]
    };
    return (
       <Chart
       options={{...options, xaxis: mockData.labels}}
       series={mockData.series}
       type="bar"
       height="240"
       />
    );
}

export default BarChart;
