import './App.css';
import Hyperspeed from './Hyperspeed/Hyperspeed.jsx';
import Navbar from './Navbar.jsx';

function Features() {
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '20px'
  };

  const boxStyle = {
    background: 'rgba(23, 36, 224, 0.61)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    padding: '18px',
    minWidth: '260px',
    maxWidth: '360px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
    position: 'relative',
    zIndex: 1000
  };

  const titleStyle = {
    fontSize: '18px',
    marginBottom: '10px'
  };

  const listStyle = { margin: 0, paddingLeft: '20px', lineHeight: '1.6' };

  return (
    <div className="App" id="features">
        <Hyperspeed />
      <header className="App-header">
        <Navbar />
        <p className="hero">Our Features</p>

        <div style={containerStyle}>
          <div style={boxStyle}>
            <h3 style={titleStyle}>⚙️ Features</h3>
            <ul style={listStyle}>
              <li>Embed-based moderation logs</li>
              <li>Modular config system</li>
              <li>Permission-gated commands</li>
              <li>Branded embed styling</li>
              <li>Fun commands for engagement</li>
            </ul>
          </div>

          <div style={boxStyle}>
            <h3 style={titleStyle}>🚀 Setup Guide</h3>
            <ul style={listStyle}>
              <li>Invite InfiniMod using invite button above</li>
              <li>Assign required permissions</li>
              <li>Setup logs using <code>/setlogchannel</code></li>
              <li>Test moderation commands like <code>/purge</code> or <code>/kick</code></li>
            </ul>
          </div>

          <div style={boxStyle}>
            <h3 style={titleStyle}>🛠️ Support</h3>
            <p style={{ marginBottom: '10px' }}>
              Need help? Join our support server or reach out via Discord.
            </p>
            <a
              href="https://discord.gg/6utRveZpgr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#61dafb', textDecoration: 'underline' }}
            >
              https://discord.gg/fPn4dNDF6p
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Features;