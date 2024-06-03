import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const BarChart = () => {
    useEffect(() => {
        const bookCategories = [
            "Fiction", "Non-Fiction", "Mystery", "Thriller", 
            "Science Fiction", "Fantasy", "Romance", "Horror", 
            "Historical Fiction", "Literary Fiction", "Young Adult", 
            "Children's Books", "Biography", "Autobiography", 
            "Memoir"
        ];

        const earnings = [
            44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000,
            59000, 52000, 49000, 48000, 47000, 46000
        ];

        var options = {
            series: [{
                name: 'Earnings',
                data: earnings,
              
            }],
            chart: {
                type: 'bar',
                height: 350,
                // Provide color as an array
                colors: ['#000d42'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                title: {
                    text: 'Book Categories',
                    style: {
                        fontSize: '12px',
                        color: '#000d42' 
                    }
                },
                categories: bookCategories,
            },
            yaxis: {
                title: {
                    text: 'Total Earnings (Rupees)',
                    style: {
                        fontSize: '12px',
                        color: '#000d42' // Y-axis title color
                    }
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "₹ " + val
                    }
                }
            }
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className='SubContainer barchart'>
            <div id="chart"></div>
        </div>
    );
}

export default BarChart;
