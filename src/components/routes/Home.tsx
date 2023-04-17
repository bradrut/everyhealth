import '../../App.css';
import './Home.css';
import Map from '../Map';
import { COLORS } from '../../common/colors';
import TherapyImage from '../../assets/mental-health-counselling-therapy.jpeg';
import { APTC_TRAINING_CLINICS } from '../../data/aptcTrainingClinics';

const TEXT_HIGHLIGHT_STYLE = { color: COLORS.primaryHighlight };

export function Home() {

  return (
    <div className="body-content">
      <div style={{ position: 'relative', textAlign: 'center', overflow: 'auto', marginTop: '30px', marginBottom: '30px' }}>
        <h3 className='heading-text'><span style={TEXT_HIGHLIGHT_STYLE}>Therapy</span> and <span style={TEXT_HIGHLIGHT_STYLE}>counseling</span> should be affordable for <span style={TEXT_HIGHLIGHT_STYLE}>everyone.</span></h3>
        <img src={TherapyImage} className='therapy-img' alt="Psychologist providing mental health services and counselling with psychotherapy"></img>
      </div>
      <p>...and that's why we have created the <a href={'#trainingClinicsMap'} rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight, textDecoration: 'none' }}>EveryHealth training clinics map</a> &mdash; a mental health resource to help you find affordable mental heath care near you.</p>
      <p>If you are considering seeking the support of a therapist or counselor but the cost seems insurmountable, consider
        looking into <b>official APTC training clinics</b> near you.</p>
      <p>These clinics, officially recognized by the <a href={'https://www.aptc.org/'} target="_blank" rel="noopener noreferrer" style={{ color: COLORS.primaryHighlight }}>Association of Psychology Training Clinics (APTC)</a>, are typically universities...</p>
      <Map orgData={APTC_TRAINING_CLINICS} />
    </div>
  );
}

export default Home;