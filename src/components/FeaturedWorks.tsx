import React from 'react';

const FeaturedWorks: React.FC = () => {
  const logos = ['Livestorm', 'Pitch', 'Courier', 'Almanac', 'Appsheet'];
  
  return (
    <>
      <div className="logo-bar">
        <div className="container logo-flex">
          {logos.map(logo => (
            <div key={logo} className="logo-item"><span>{logo}</span></div>
          ))}
        </div>
      </div>

      <section id="works" className="featured-works reveal-on-scroll">
        <div className="works-layout">
          <div className="works-sidebar">
            <div className="works-label">(WORKS) PORTFOLIO PHOTOGRAPHY PREVIEW</div>
            <div className="categories">
              <div className="category">PORTRAIT PHOTOGRAPHY</div>
              <div className="category active">→ LIFESTYLE & BRANDING</div>
              <div className="category">ENGAGEMENT & WEDDINGS</div>
              <div className="category">FAMILY & NEWBORN</div>
            </div>
          </div>
          <div className="works-hero-img">
            <img src="/assets/story_featured.png" alt="Main Work" />
            <div className="img-count">[02]</div>
          </div>
        </div>
      </section>

      <style>{`
        .logo-bar {
          padding: 30px 0;
          border-bottom: 1px solid #eee;
        }
        .logo-flex {
          display: flex;
          justify-content: space-around;
          align-items: center;
          opacity: 0.5;
        }
        .logo-item span {
          font-size: 18px;
          font-weight: 700;
        }
        .featured-works {
          background-color: var(--pitch-black);
          color: var(--pure-white);
          padding: 60px 0;
        }
        .works-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 0 5%;
        }
        .works-sidebar {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .works-label {
          font-size: 11px;
          letter-spacing: 1px;
          opacity: 0.6;
        }
        .categories {
          margin-top: 60px;
        }
        .category {
          font-size: 32px;
          font-weight: 800;
          line-height: 1.1;
          opacity: 0.3;
          margin-bottom: 15px;
          transition: var(--transition-smooth);
          cursor: pointer;
        }
        .category.active {
          opacity: 1;
        }
        .category:hover {
          opacity: 1;
          transform: translateX(10px);
        }
        .works-hero-img {
          position: relative;
        }
        .works-hero-img img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
        .img-count {
          position: absolute;
          bottom: 0px;
          right: 0px;
          font-size: 14px;
          font-weight: 600;
          padding: 10px;
        }
      `}</style>
    </>
  );
};

export default FeaturedWorks;
