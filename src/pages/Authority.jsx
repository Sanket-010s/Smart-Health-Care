import { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
} from 'chart.js'
import DiseaseMap from '../components/DiseaseMap'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
)

function Authority() {
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => {
    const alert = localStorage.getItem('healthAlert') || ''
    setAlertMessage(alert)
  }, [])

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Dengue Cases',
        data: [5, 9, 7, 12, 10, 15, 18],
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Flu Cases',
        data: [10, 12, 15, 13, 17, 20, 22],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const sendAlert = () => {
    const alertMsg = 'Dengue outbreak detected in Ward A. Avoid stagnant water and seek medical help if symptoms appear.'
    localStorage.setItem('healthAlert', alertMsg)
    setAlertMessage(alertMsg)
    alert('Alert sent to citizens!')
  }

  return (
<>
<div>

<div className="page-header">
  <h1 className="page-title">Municipal Health Analytics Dashboard</h1>
  <p className="page-subtitle">Disease trend monitoring for city wards</p>
</div>

{alertMessage && (
  <div className="alert-banner danger">
    <div className="alert-icon">🚨</div>
    <div className="alert-content">
      <h4>Health Alert Active</h4>
      <p>{alertMessage}</p>
    </div>
  </div>
)}

<div className="dashboard-grid">

  <div className="dashboard-card">
    <h3>Total Hospitals</h3>
    <div className="value">12</div>
  </div>

  <div className="dashboard-card">
    <h3>Active Cases</h3>
    <div className="value" style={{ color: '#ef4444' }}>68</div>
  </div>

  <div className="dashboard-card">
    <h3>Available Beds</h3>
    <div className="value" style={{ color: '#10b981' }}>140</div>
  </div>

  <div className="dashboard-card">
    <h3>Alerts Sent</h3>
    <div className="value" style={{ color: '#f59e0b' }}>3</div>
  </div>

</div>

<div className="chart-container">
  <h3 className="chart-title">Disease Trend Analytics</h3>
  <Line data={data} options={chartOptions} />
</div>

<div className="chart-container">
  <h3 className="chart-title">City Disease Risk Map</h3>
  <div className="map-container">
    <DiseaseMap />
  </div>
</div>

<div className="chart-container">
  <h3 className="chart-title">Emergency Alert System</h3>
  <button
    onClick={sendAlert}
    className="btn btn-danger"
    style={{ marginTop: '10px' }}
  >
    Send City Health Alert
  </button>
</div>

<div className="chart-container">
  <h3 className="chart-title">AI Disease Prediction</h3>

  <div className="prediction-grid">

    <div className="prediction-card high">
      <h4>Dengue Risk</h4>
      <span className="prediction-badge high">High Risk</span>
      <p>Expected increase next week by 25%</p>
    </div>

    <div className="prediction-card moderate">
      <h4>Flu Cases</h4>
      <span className="prediction-badge moderate">Moderate</span>
      <p>Cases may increase by 15%</p>
    </div>

    <div className="prediction-card moderate">
      <h4>Hospital Load</h4>
      <span className="prediction-badge moderate">Rising</span>
      <p>Expected patient load +20%</p>
    </div>

  </div>

</div>

</div>
</>
)
}

export default Authority