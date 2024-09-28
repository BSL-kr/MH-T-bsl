import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import RiskAssessmentPage from './pages/riskAssessmentAdequacy';
import OpinionGather from './pages/opinionGather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/dms-summary' />
        <Route path='/opinion-gather' element={<OpinionGather />} />
        <Route path='/risk-assessment-adequacy' element={<RiskAssessmentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
