import React from 'react';
import './App.css';

// Intersection Types
type Profile = {
  age: number;
  city: string;
}

type Login = {
  username: string;
  password: string;
}

type User = Profile & Login;
const user1: User = {
  age: 30,
  city: "Nagano",
  username: "Matsuda",
  password: "xxxxyyyy"
}

console.log(user1);     

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
