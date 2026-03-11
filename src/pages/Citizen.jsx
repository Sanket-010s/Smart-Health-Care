import { useState, useEffect } from 'react'

function Citizen() {
  const [healthAlert, setHealthAlert] = useState('')

  useEffect(() => {
    const alert = localStorage.getItem('healthAlert') || ''
    setHealthAlert(alert)
  }, [])

  const hospitals = [
    { name: 'City General Hospital', distance: '2.5 km', available: 45, phone: '+1 555-0101' },
    { name: 'Municipal Medical Center', distance: '3.8 km', available: 30, phone: '+1 555-0102' },
    { name: 'Community Health Center', distance: '5.2 km', available: 20, phone: '+1 555-0103' },
    { name: 'St. Marys Hospital', distance: '6.1 km', available: 55, phone: '+1 555-0104' },
  ]

  return (
    <div>

      <div className="page-header">
        <h1 className="page-title">Citizen Health Portal</h1>
        <p className="page-subtitle">Check health alerts and find nearby hospitals</p>
      </div>

      {healthAlert && (
        <div className="alert-banner danger">
          <div className="alert-icon">🚨</div>
          <div className="alert-content">
            <h4>Health Alert</h4>
            <p>{healthAlert}</p>
          </div>
        </div>
      )}

      <div className="dashboard-grid">

        <div className="dashboard-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon">🏥</div>
          <h3 style={{ marginTop: '10px' }}>Find Hospital</h3>
          <p style={{ color: '#64748b', marginTop: '5px' }}>Locate nearby medical facilities</p>
        </div>

        <div className="dashboard-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon">🩺</div>
          <h3 style={{ marginTop: '10px' }}>Health Tips</h3>
          <p style={{ color: '#64748b', marginTop: '5px' }}>Daily health recommendations</p>
        </div>

        <div className="dashboard-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon">📋</div>
          <h3 style={{ marginTop: '10px' }}>Medical History</h3>
          <p style={{ color: '#64748b', marginTop: '5px' }}>View your health records</p>
        </div>

        <div className="dashboard-card" style={{ cursor: 'pointer' }}>
          <div className="stat-icon">📞</div>
          <h3 style={{ marginTop: '10px' }}>Emergency</h3>
          <p style={{ color: '#64748b', marginTop: '5px' }}>Call emergency services</p>
        </div>

      </div>

      <div className="chart-container">
        <h3 className="chart-title">🏥 Nearby Hospitals</h3>

        <div className="hospital-grid">
          {hospitals.map((hospital, index) => (
            <div key={index} className="hospital-card">

              <h3>{hospital.name}</h3>

              <div className="hospital-info">
                <span>Distance</span>
                <span>{hospital.distance}</span>
              </div>

              <div className="hospital-info">
                <span>Available Beds</span>
                <span style={{ color: '#10b981' }}>{hospital.available}</span>
              </div>

              <div className="hospital-info">
                <span>Contact</span>
                <span>{hospital.phone}</span>
              </div>

              <button
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '15px' }}
              >
                Get Directions
              </button>

            </div>
          ))}
        </div>

      </div>

      <div className="chart-container">
        <h3 className="chart-title">💡 Health Tips</h3>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon">💧</div>
            <h3>Stay Hydrated</h3>
            <p>Drink at least 8 glasses of water daily to maintain optimal health.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">😴</div>
            <h3>Get Enough Sleep</h3>
            <p>Aim for 7-9 hours of quality sleep each night for better immunity.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏃</div>
            <h3>Regular Exercise</h3>
            <p>Stay active with at least 30 minutes of moderate exercise daily.</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Citizen