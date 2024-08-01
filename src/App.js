import React from "react";
import { AuthProvider } from "./components/AuthContext";
import AppContent from "./AppContent"
function App() {
  return (
    <AuthProvider>
      <AppContent/>
    </AuthProvider>
    
   
  );
}

export default App;
