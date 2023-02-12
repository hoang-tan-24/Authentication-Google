import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/Account';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route
          path='/account'
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;