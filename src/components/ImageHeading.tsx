import React from 'react';

import { COLORS } from '../common/colors';
import TherapyImage from '../assets/mental-health-counselling-therapy.jpeg';
import './ImageHeading.css';

const TEXT_HIGHLIGHT_STYLE = { color: COLORS.primaryHighlight };

export default function ImageHeading() {
  return (
    <div className='heading-container' style={{ position: 'relative', textAlign: 'center', overflow: 'auto', marginTop: '30px', marginBottom: '30px' }}>
      <h3 className='heading-text'><span style={TEXT_HIGHLIGHT_STYLE}>Therapy</span> and <span style={TEXT_HIGHLIGHT_STYLE}>counseling</span> can be affordable <span style={TEXT_HIGHLIGHT_STYLE}>for everyone.</span></h3>
      <img src={TherapyImage} className='therapy-img' alt="Psychologist providing mental health services and counselling with psychotherapy"/>
    </div>
  )
}
