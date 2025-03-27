import React from 'react';
import './App.css';
import { TodoWrapper } from './components/TodoWrapper';
import { UserProfile } from "./components/UserProfile";

function App() {
  console.log("✅ App component is rendering..."); // Debugging

  return (
    <div className="App">
      <UserProfile />
      <TodoWrapper  />
    </div>
  );
}

export default App;

