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
let company: "Facebook" | "Google" | "Amazon" | "Apple";
company = "Apple";

// typeof 型を取得してその型に限定する
let msg = "松田";
let msg2: typeof msg = "ストリング";

// keyof キーを取得して
type Keys = {
  primary: string;
  secondary: string;
}
let key: keyof Keys;
key = "primary";
key = "secondary";

// typeof + keyof
const SPORTS = {
  soccer: "サッカー",
  baseBall: "野球",
}
let tkSports: keyof typeof SPORTS; // key名のstring型しか受け付けなくなる
tkSports = "soccer"
tkSports = "baseBall"

// enum
enum Drink {
  Cola,
  Water,
  Milk,
}
interface MorningDrink {
  id: number;
  DrinkType: Drink;
}
const drink1: MorningDrink = {
  id: 1,
  DrinkType: Drink.Milk,
}
const drink2: MorningDrink = {
  id: 2,
  DrinkType: Drink.Water,
}

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
