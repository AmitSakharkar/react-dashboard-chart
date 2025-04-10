import React, { useMemo, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        maxRotation: 0,
        autoSkip: true,
        maxTicksLimit: 7,
        color: '#6B7280'
      }
    },
    y: {
      grid: {
        color: '#E5E7EB',
        drawBorder: false
      },
      ticks: {
        color: '#6B7280',
        stepSize: 20,
        callback: (value) => `${value}%`
      },
      min: 0,
      max: 100
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: false
    }
  },
  maintainAspectRatio: false,
  animation: {
    duration: 500
  }
};

const WeeklyActivityChart = ({ data }) => {
  useEffect(() => {
    console.log('Chart data received:', data);
    if (!data || data.length === 0) {
      console.warn('No data provided to WeeklyActivityChart');
    }
  }, [data]);

  const chartData = useMemo(() => {
    if (!data || data.length === 0) {
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'No Data',
            backgroundColor: '#396AFF',
            data: [0, 0, 0, 0, 0, 0, 0],
            borderWidth: 0,
            borderRadius: 4,
            barPercentage: 0.6,
            categoryPercentage: 0.8,
            borderSkipped: false,
          }
        ]
      };
    }

    return {
      labels: data.map(day => day?.day),
      datasets: [
        {
          label: 'Activity',
          backgroundColor: '#4F46E5',
          data: data.map(day => day?.value),
          borderWidth: 0,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8,
          borderSkipped: false,
        },
        {
          label: 'Baseline',
          backgroundColor: '#E5E7EB',
          data: data.map(day => day?.baseline || 0),
          borderWidth: 0,
          borderRadius: 4,
          barPercentage: 0.6,
          categoryPercentage: 0.8,
          borderSkipped: false,
        }
      ]
    };
  }, [data]);

  return (
    <div style={{ 
      height: '300px',
      width: '100%',
      position: 'relative',
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <span style={{
          color: '#111827',
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'Inter, sans-serif'
        }}>
          Weekly Activity
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '2px',
              backgroundColor: '#4F46E5'
            }}></div>
            <span style={{ fontSize: '12px' }}>Deposit</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '2px',
              backgroundColor: '#E5E7EB'
            }}></div>
            <span style={{ fontSize: '12px' }}>Withdrawal</span>
          </div>
        </div>
      </div>
      {!data?.length && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#999',
          textAlign: 'center'
        }}>
          No data available
        </div>
      )}
      <Bar 
        data={chartData} 
        options={chartOptions} 
        redraw
      />
    </div>
  );
};

export default React.memo(WeeklyActivityChart);
