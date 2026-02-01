import React from 'react';
import './index.css';

function App() {
  const trendingExplorations = [
    { name: "Amalfi Coast, Italy", rate: "from $1,400", src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800" },
    { name: "Kyoto Gardens, Japan", rate: "from $1,150", src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800" },
    { name: "Swiss Alps, Zurich", rate: "from $2,100", src: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=800" },
  ];

  return (
    <div className="app-container">
      <nav className="header-nav">
        <div className="brand-logo">KLUGSYS<span> AI</span></div>
        <div className="menu-list">
          <a href="#" className="menu-item">Solutions</a>
          <a href="#" className="menu-item">Destinations</a>
          <a href="#" className="menu-item">Corporate Travel</a>
        </div>
        <button className="cta-button">Portal Login</button>
      </nav>

      <main className="hero-wrapper">
        <span className="hero-tag">Engineering Global Travel</span>
        <h1 className="hero-title">Discover the next frontier of <span>intelligent exploration.</span></h1>
        <p className="hero-sub">
          We leverage advanced tech. to streamline travel logistics. 
          Performance-driven itineraries optimized for modern global professionals.
        </p>
        
        <div className="search-panel">
          <div className="input-box">
            <span className="input-label">Destination</span>
            <input type="text" placeholder="Global search..." className="input-field" />
          </div>
          <div className="input-box">
            <span className="input-label">Schedule</span>
            <input type="text" placeholder="Select timeframe" className="input-field" />
          </div>
          <button className="cta-button" style={{padding: '0 40px', borderRadius: '12px'}}>Search</button>
        </div>
      </main>

      <section className="content-section">
        <div style={{marginBottom: '40px'}}>
          <h2 style={{fontSize: '2rem', color: '#111827'}}>Featured Itineraries</h2>
          <p style={{color: '#6b7280'}}>Proprietary selection of global trending hotspots.</p>
        </div>

        <div className="grid-layout">
          {trendingExplorations.map((item, index) => (
            <div className="dest-card" key={index}>
              <img src={item.src} alt={item.name} className="card-banner" />
              <div className="card-body">
                <h3 style={{fontSize: '1.25rem', marginBottom: '12px'}}>{item.name}</h3>
                <div className="card-meta">
                  <span className="price-tag">{item.rate}</span>
                  <span style={{fontSize: '0.8rem', fontWeight: '600'}}>Available Now</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-note">
        <p className="copy-text">
          &copy; {new Date().getFullYear()} MOHD YUSUF ANSARI. All rights reserved.
        </p>
        <p style={{fontSize: '0.7rem', color: '#d1d5db', marginTop: '10px', letterSpacing: '1px'}}>
          Just a testing Site for Klugsys AI Travel
        </p>
      </footer>
    </div>
  );
}

export default App;