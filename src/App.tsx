import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import RiskAssessmentPage from './pages/riskAssessmentAdequacy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dms-summary' />
        <Route path='/opinion-gather' />
        <Route path='/risk-assessment-adequacy' element={<RiskAssessmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
