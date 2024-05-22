import Chart from 'react-apexcharts'

function DoughnutChart({series}) {

  return (
        <Chart 
            type="donut"
            options={{
                chart: {
                    animations: {
                        enabled: true,
                    }},
                labels:["Savings", "Investment", "Expenses"],
                colors: ["#166534", "#1d4ed8", "#dc2626"],
                legend: {
                    position: 'bottom',
                    fontSize: '24px',
                    display: "flex",
                    flexDirection: "column"
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    fontSize: 30,
                                    color: "red"
                                }
                            }
                        }
                    }
                }
            }} 
            series={series}
        />
  )
}

export default DoughnutChart
