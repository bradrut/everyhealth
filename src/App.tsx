import './App.css';
import Map from './components/Map';
import { APTC_TRAINING_CLINICS } from './data/aptcTrainingClinics';

function App() {

  // TODO: Update font family

  return (
    <div className="App">
      {/* <header className='App-header'></header> */}
      <div className="body-content">
        <h5>Everyone deserves access to <span className='text-highlight'>affordable</span> and <span className='text-highlight'>quality mental health care</span>...</h5>
        <p style={{ textAlign: 'center' }}>...but we know that it's not always easy to find.</p><br/>
        <p>If you are seeking the support of a therapist or counselor but aren't able to afford the cost, consider
          looking into <span className='text-highlight'><b>official APTC training clinics</b></span> near you.</p>
        <p>These clinics, officially recognized by the Association of Psychology Training Clinics, are typically universities...</p>
        <Map orgData={APTC_TRAINING_CLINICS} />

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
