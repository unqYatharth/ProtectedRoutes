import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ReverseProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  if(user) {
    return <Navigate to='/dashboard' replace />
  }
  return children
}

export default ReverseProtectedRoute;