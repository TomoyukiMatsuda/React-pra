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

// Union Types
let value: boolean | number;
value = 10;
value = false;
let arrUni: (number | string)[];
arrUni = [0, 1, 2, "こんにちは", 2, "こんにちは", "こんばんわ"];

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
