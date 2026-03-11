import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === 'citizen' && password === '123') {
      localStorage.setItem('role', 'citizen')
      navigate('/citizen')
    } else if (username === 'hospital' && password === '123') {
      localStorage.setItem('role', 'hospital')
      navigate('/hospital')
    } else if (username === 'admin' && password === '123') {
      localStorage.setItem('role', 'admin')
      navigate('/authority')
    } else {
      alert('Invalid login credentials')
    }
  }

  const demoAccounts = [
    { role: 'Citizen', username: 'citizen', password: '123', icon: '👤', color: '#0ea5e9' },
    { role: 'Hospital', username: 'hospital', password: '123', icon: '🏥', color: '#10b981' },
    { role: 'Authority', username: 'admin', password: '123', icon: '📊', color: '#8b5cf6' },
  ]

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '50px',
        width: '100%',
        maxWidth: '450px',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div style={{ 
            fontSize: '3.5rem', 
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🏥
          </div>
          <h1 style={{ 
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#1e293b',
            marginBottom: '8px'
          }}>
            Smart Health System
          </h1>
          <p style={{ color: '#64748b' }}>Sign in to your account</p>
        </div>

        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>

        <button 
          onClick={handleLogin} 
          className="btn btn-primary" 
          style={{ width: '100%', marginTop: '10px', padding: '16px' }}
        >
          Sign In
        </button>

        <div style={{ marginTop: '35px', textAlign: 'center' }}>
          <p style={{ color: '#64748b', marginBottom: '20px', fontSize: '0.95rem' }}>
            Demo Accounts - Click to login
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {demoAccounts.map((account) => (
              <button
                key={account.role}
                onClick={() => {
                  setUsername(account.username)
                  setPassword(account.password)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  background: `${account.color}15`,
                  border: `2px solid ${account.color}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  color: account.color,
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                <span>{account.icon}</span>
                {account.role}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link 
            to="/" 
            style={{ 
              color: '#64748b', 
              textDecoration: 'none',
              fontSize: '0.95rem'
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

