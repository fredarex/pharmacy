import React, { useEffect } from 'react';
import Chart from 'react-apexcharts'
import StatusCard from '../../StatusCard/StatusCard';
import statusCards from '../../../assets/JsonData/status-card-data.json';

function AdminDashboard() {
  const chartOptions = {
    series: [
      {
      name: 'Orders',
      data:[40,70,20,90,36,80,20,81,55]
    }
  ],
  options: {
    color: ['#6ab04c','#2980b9'],
    chart: {
      background: 'transparent'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar','Apr', 'May', 'Jun', 'Jul','Aug','Sep','Oct','Nov','Dec']
    },
    legend: {
      position: 'top'
    },
    grid: {
      show: false
    }
  }
  }
  
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            {
              statusCards.map((item, index) => (
                <div className='col-6'>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))
            }
          </div>
        </div>
        <div className='col-6'>
            <div className='card full-height'>
              <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type='line'
                height='100%'
              />
            </div>
        </div>
        {/* <div className='col-4'>
            <div className='card'>
              <div className='card__header'>
                <h3>Health Education</h3>
              </div>
              <div className='card__body'>

              </div>
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default AdminDashboard