import { Button, Group } from '@mantine/core';

import './Home.css';
import ImageHeading from '../ImageHeading';
import Map from '../Map';
import { COLORS } from '../../common/colors';
import { APTC_TRAINING_CLINICS } from '../../data/aptcTrainingClinics';

export function Home() {

  return (
    <div className="body-content">
      <ImageHeading/>
      <div className='home-text-content-wrapper'>
        <p style={{ marginBottom: '0px', textAlign: 'center', margin: 'auto' }}>Mental health resources should be accessible to everyone &mdash; regardless of income status &mdash; and that's why we have created the <span style={{ color: COLORS.primaryHighlight, fontWeight: 'bold' }}>EveryHealth training clinics map</span>. Our training clinic map helps make local and affordable psychology and counseling services easier for you to find. Let us be a part of your journey towards a happier, healthier, and more fulfilled <i>you</i>.</p>
        <Group position="center" mt="xl">
          <a href={'#trainingClinicsMap'} rel="noopener noreferrer">
            <Button className='jump-to-map-btn' type="submit" size="md">
              Find training clinics near you
            </Button>
          </a>
        </Group>
        <p>If you are considering seeking the support of a therapist or counselor but the cost seems insurmountable, consider
          looking into <b>official APTC training clinics</b> near you.</p>
        <p>These clinics, officially recognized by the <a href={'https://www.aptc.org/'} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight }}>Association of Psychology Training Clinics (APTC)</a>, are typically universities...</p>
      </div>
      <Map orgData={APTC_TRAINING_CLINICS} />
    </div>
  );
}

export default Home;
