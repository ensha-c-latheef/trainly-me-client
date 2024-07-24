import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import WorkoutDetailPage from './pages/WorkoutDetailPage';
import Navbar from './components/Navbar';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
  <div className='App'>
    <Navbar />
    <div className="pages">
      
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/workouts/:workoutId" element={ <WorkoutDetailPage /> } />
      </Routes>

    </div>
  </div>
      
  
  )
}

export default App
