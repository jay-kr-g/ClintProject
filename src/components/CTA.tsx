import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="cta" style={{ backgroundImage: "url('/assets/cta_bg.png')" }}>
      <div className="cta-overlay"></div>
      <div className="cta-content">
        <h2>LET'S CAPTURE SOMETHING REAL.</h2>
        <p>AVAILABILITY LIMITED - BOOKING MARCH 2025</p>
        <a href="#" className="cta-btn">KNOW MORE</a>
      </div>
      <style>{`
        .cta {
          position: relative;
          height: 80vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--pure-white);
        }
        .cta-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(5px);
        }
        .cta-content {
          position: relative;
          z-index: 1;
        }
        .cta-content h2 {
          font-size: clamp(30px, 6vw, 60px);
          margin-bottom: 20px;
        }
        .cta-content p {
          font-size: 14px;
          letter-spacing: 2px;
          margin-bottom: 40px;
        }
        .cta-btn {
          display: inline-block;
          padding: 15px 40px;
          border: 1px solid var(--pure-white);
          font-weight: 700;
          transition: var(--transition-smooth);
        }
        .cta-btn:hover {
          background-color: var(--pure-white);
          color: var(--pitch-black);
        }
      `}</style>
    </section>
  );
};

export default CTA;
