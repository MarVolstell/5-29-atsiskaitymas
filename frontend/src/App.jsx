import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './styles/base/global.css'
import Reservation from "./pages/Reservation"
import Index from "./pages/Index"
import { ReservationProvider } from "./context/reservationContext"


function App() {
  return (
    <ReservationProvider>
            <Router>
              <div className="app-container">
                <main className="content">
                  <Routes>
                      <Route path="/" element={<Index/>}/>
                      <Route path="/reservation" element={<Reservation/>}/>
                  </Routes>
                </main>
              </div>
            </Router>
    </ReservationProvider>
  )
}

export default App
