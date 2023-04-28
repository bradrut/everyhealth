import { Button, Group } from '@mantine/core';

import './Home.css';
import Map from '../Map';
import { COLORS } from '../../common/colors';
import { APTC_TRAINING_CLINICS } from '../../data/aptcTrainingClinics';
import ImageHeading from '../ImageHeading';

export function Home() {

  return (
    <div className="body-content">
      <div className='landing-content'>
        <ImageHeading/>
        <p className='subheading-text'>Everyone should have access to appropriate mental health resources &mdash; regardless of income status &mdash; and that's why we have created the <span style={{ color: COLORS.primaryHighlight, fontWeight: 'bold' }}>EveryHealth training clinics map</span>. This resource helps make local and affordable psychology and counseling services easier for you to find. Let us be a part of your journey towards a happier, healthier, and more fulfilled <i>you</i>.</p>
        <Group position="center" mt="xl">
          <a href={'#trainingClinics'} rel="noopener noreferrer">
            <Button className='jump-to-map-btn' size="md">
              Find training clinics near you
            </Button>
          </a>
        </Group>
      </div>
      <div id='trainingClinics' className='subsection-content'>
        <Map orgData={APTC_TRAINING_CLINICS} />
        <div className='qa-content-wrapper'>
          <h6>What are psychology training clinics?</h6>
          <p>If you are considering seeking the support of a therapist or counselor but the cost seems insurmountable, consider
            looking into <b>official APTC training clinics</b> near you. These clinics, officially recognized by the <a href={'https://www.aptc.org/'} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight }}>Association of Psychology Training Clinics (APTC)</a>, are typically universities...</p>
          <h6>What kinds of services do training clinics offer?</h6>
          <p>Placeholder...</p>
          <h6>What are the other benefits of training clinics, besides affordability?</h6>
          <p>Placeholder...</p>
          <h6>I have more questions about training clinics and the services they offer...</h6>
          <p>If you're still uncertain whether you'd like to seek counseling at a training clinic, use our training clinics map to find a training clinic near you. Most clinics post further information on their website, including the cost of their services.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
