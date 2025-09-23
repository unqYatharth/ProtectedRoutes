import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./pages/Dashboard"
import ReverseProtectedRoute from "./components/ReverseProtectedRoute"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={
            <ReverseProtectedRoute>
              <Signup />
            </ReverseProtectedRoute>
          } />
          <Route path='/login' element={
            <ReverseProtectedRoute>
              <Login />
            </ReverseProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
