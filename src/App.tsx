import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
   <Router>
    <Routes>
      <Route path="/dms-summary"/>
      <Route path="/opinion-gather"/>
      <Route path="/risk-assessment-adequacy"/>
    </Routes>
   </Router>
  )
}

export default App
