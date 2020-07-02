import React, { useState, useRef, useEffect } from 'react';
import propTypes from 'prop-types';

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible && 'is-visible'}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeInSection;

FadeInSection.propTypes = {
  children: propTypes.element.isRequired,
};
