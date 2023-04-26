import React from 'react';

import { COLORS } from '../common/colors';
import TherapyImage from '../assets/mental-health-counselling-therapy.jpeg';
import './ImageHeading.css';

const TEXT_HIGHLIGHT_STYLE = { color: COLORS.primaryHighlight };

export default function ImageHeading() {
  return (
    <div className='heading-container'>
      <h2 className='heading-text'><span style={TEXT_HIGHLIGHT_STYLE}></span>You deserve <span style={TEXT_HIGHLIGHT_STYLE}>affordable</span> mental health care.<span style={TEXT_HIGHLIGHT_STYLE}></span></h2>
      <img src={TherapyImage} className='therapy-img' alt="Psychologist providing mental health services and counselling with psychotherapy"/>
    </div>
  )
}
