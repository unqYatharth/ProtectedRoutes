import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {
    const current = localStorage.getItem('currentUser')
    return current ? JSON.parse(current) : null;
  })

  function signup(userData) {

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const exist = users.find((u) => u.email === userData.email)

    if(exist) {
      throw new Error('User already exists');
    }

    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('currentUser', JSON.stringify(userData))
    setUser(userData)

  }

  function login(userData) {
    const { email, password } = userData;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find((u) => u.email === email && u.password === password);

    if(foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      setUser(foundUser)
      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem('currentUser');
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);