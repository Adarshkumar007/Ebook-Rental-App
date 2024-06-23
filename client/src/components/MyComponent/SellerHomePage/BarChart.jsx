import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import { useDispatch, useSelector } from 'react-redux';
import { logout, setActiveModal } from '../../../redux/actions/authActions';
import axios from 'axios';
import { url } from '../../../url';

const BarChart = () => {
    const dispatch =useDispatch();
    const [bookCategories, setBookCategories] = useState([]);
    const [earnings, setEarnings] = useState([]);
  const isSellerAuthenticated=useSelector((state)=>state.sellerauth.isAuthenticated)
    
     useEffect(()=>{
        const fetchData = async () => {
        try {
          const response = await axios.get(url+'/bookchart', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("sellertoken")}`
            }
        });
        const data = response.data;
        const categories = data.map(item => item._id);
        const earnings = data.map(item => item.totalAmount/100);

        setBookCategories(categories);
        setEarnings(earnings);
        console.log("ssdssjjhjhjjd",response);
      } catch (error) {
          if (error.response) {
              if (error.response.status === 403) {
                console.error('Error 403: Forbidden');
                dispatch(logout("seller"));
                dispatch(setActiveModal("login","seller"));
              } else {
                console.error(`Error ${error.response.status}: ${error.response.statusText}`);
                // Handle other errors
              }
            } else if (error.request) {
              // The request was made but no response was received
              console.error('No response received', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error', error.message);
            }
        } 
      }
      fetchData();
    },[isSellerAuthenticated]);
    useEffect(() => {
       if(earnings){
        console.log("bxgd",earnings,bookCategories)
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
       }
    }, [earnings]);

    return (
        <div className='SubContainer barchart'>
            <div id="chart"></div>
        </div>
    );
}

export default BarChart;
