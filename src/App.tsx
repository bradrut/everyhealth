import './App.css';
import Map from './components/Map';

function App() {

  // TODO: Update font family

  return (
    <div className="App">
      {/* <header className='App-header'></header> */}
      <div className="body-content">
        <h5>Everyone deserves affordable access to quality <span className='text-highlight'>mental health care</span>...</h5>
        <p>...but it's not always easy to find.<br/>
          If you want the support of a therapist or counselor but aren't able to afford the cost, consider
          looking into <span className='text-highlight'><b>official training clinics</b></span> near you.</p>
        <Map />

        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
