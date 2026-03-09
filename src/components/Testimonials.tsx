import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="testimonials reveal-on-scroll">
      <div className="container">
        <h2 className="testimonial-header">REAL WORDS FROM REAL SOULS</h2>
        <div className="testimonial-content">
           <div className="testimonial-img">
             <img src="/assets/glitch_4.png" alt="Client" />
           </div>
           <div className="testimonial-text">
             <div className="testimonial-label">(REVIEWS)</div>
             <p>"THE QUALITY AND PROFESSIONALISM ARE TOP-NOTCH. ANTON HAS A UNIQUE EYE FOR DETAIL."</p>
             <div className="testimonial-author">ELENA M.</div>
           </div>
        </div>
      </div>
      <style>{`
        .testimonials {
          background-color: var(--pitch-black);
          color: var(--pure-white);
          padding: 100px 0;
        }
        .testimonial-header {
          font-size: 40px;
          margin-bottom: 60px;
        }
        .testimonial-content {
          display: flex;
          gap: 60px;
          align-items: center;
        }
        .testimonial-img {
          width: 300px;
          height: 400px;
          overflow: hidden;
        }
        .testimonial-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .testimonial-text {
          flex: 1;
        }
        .testimonial-label {
          font-size: 11px;
          opacity: 0.6;
          margin-bottom: 20px;
        }
        .testimonial-text p {
          font-size: 28px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 20px;
        }
        .testimonial-author {
          font-size: 14px;
          font-weight: 800;
          border-bottom: 1px solid #333;
          display: inline-block;
          padding-bottom: 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
