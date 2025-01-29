import React from 'react';
import './awards.css'; // Import the CSS file for styling

const Awards = () => {
  const certificates = [
    { id: 1, src: '/path/to/certificate1.jpg', alt: 'Certificate 1' },
    { id: 2, src: '/path/to/certificate2.jpg', alt: 'Certificate 2' },
    { id: 3, src: '/path/to/certificate3.jpg', alt: 'Certificate 3' },
    { id: 4, src: '/path/to/certificate4.jpg', alt: 'Certificate 4' },
    { id: 5, src: '/path/to/certificate5.jpg', alt: 'Certificate 5' },
    { id: 6, src: '/path/to/certificate6.jpg', alt: 'Certificate 6' },
  ];

  return (
    <section id="awards" className="awards-section">
      <h2 className="section-title">My Awards & Certificates</h2>
      <div className="awards-grid">
        {certificates.map((cert) => (
          <div className="award-card" key={cert.id}>
            <img src={cert.src} alt={cert.alt} className="award-image" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;