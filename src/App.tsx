import { MantineProvider } from '@mantine/core';

import './App.css';
import { HeaderResponsive } from './components/Header'
import Map from './components/Map';
import { APTC_TRAINING_CLINICS } from './data/aptcTrainingClinics';
import { COLORS } from './common/colors'
import TherapyImage from './assets/mental-health-counselling-therapy.jpeg';

const textHighlightStyle = { color: COLORS.primaryHighlight };

const HEADER_LINKS = [
  { link: '#placeholder', label: 'Home' },
  { link: '#placeholder1', label: 'About' },
  { link: '#placeholder2', label: 'Contact' },
];

function App() {

  // TODO: Update font family

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App" style={{ background: COLORS.background }}>
        <HeaderResponsive links={HEADER_LINKS}></HeaderResponsive>
        <div className="body-content">
          <div style={{ position: 'relative', textAlign: 'center', overflow: 'auto', marginTop: '30px', marginBottom: '30px' }}>
            <h3 className='heading-text'><span style={textHighlightStyle}>Therapy</span> and <span style={textHighlightStyle}>counseling</span> should be affordable for <span style={textHighlightStyle}>everyone.</span></h3>
            <img src={TherapyImage} className='therapy-img' alt="Psychologist providing mental health services and counselling with psychotherapy"></img>
          </div>
          <p>...and that's why we've created the <a href={'#trainingClinicsMap'} rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight, textDecoration: 'none' }}>Care 4 Everyone training clinics map</a> &mdash; a mental health resource to help you find affordable mental heath care near you.</p>
          <p>If you are considering seeking the support of a therapist or counselor but the cost seems insurmountable, consider
            looking into <b>official APTC training clinics</b> near you.</p>
          <p>These clinics, officially recognized by the <a href={'https://www.aptc.org/'} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight }}>Association of Psychology Training Clinics (APTC)</a>, are typically universities...</p>
          <Map orgData={APTC_TRAINING_CLINICS} />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
