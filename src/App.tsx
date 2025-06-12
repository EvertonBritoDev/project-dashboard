import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<>LOGIN</>} />
          <Route path="/" element={<>REGISTER</>} />
          <Route path="/" element={<>HOME</>} />
          <Route path="/" element={<>LEADS</>} />
          <Route path="/" element={<>PROFILE</>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
