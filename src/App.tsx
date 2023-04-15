import { MantineProvider } from '@mantine/core';

import './App.css';
import { HeaderResponsive } from './components/Header'
import Map from './components/Map';
import { APTC_TRAINING_CLINICS } from './data/aptcTrainingClinics';
import { COLORS } from './common/colors'

const textHighlightStyle = { color: COLORS.primaryHighlight };

function App() {

  // TODO: Update font family

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App" style={{ backgroundColor: COLORS.background }}>
        <HeaderResponsive links={[{ link: '#placeholder', label: 'Home' }, { link: '#placeholder2', label: 'Contact' }]}></HeaderResponsive>
        <div className="body-content">
          <h5><span style={textHighlightStyle}>Everyone</span> deserves access to <span style={textHighlightStyle}>affordable therapy</span> and <span style={textHighlightStyle}>counseling.</span></h5>
          <p>If you are considering seeking the support of a therapist or counselor but the cost seems insurmountable, consider
            looking into <b>official APTC training clinics</b> near you.</p>
          <p>These clinics, officially recognized by the <a href={'https://www.aptc.org/'} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Association of Psychology Training Clinics (APTC)</a>, are typically universities...</p>
          <Map orgData={APTC_TRAINING_CLINICS} />
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
