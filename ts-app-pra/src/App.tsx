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

// 型の互換性
const comp1 = "test";
let comp2: string = comp1; // 抽象度の高い型に代入することは可能

let comp3: string = "test";
// let comp4: "test" = comp3; 抽象度の低い型に代入することはできない

// 引数の型が同じ関数であれは代入できる
let func1 = (x: number) => {};
let func2 = (x: number) => {};
func1 = func2;
// 引数の型が異なる関数は代入できない
let func3 = (x: string) => {};
let func4 = (x: number) => {};
// func1 = func2; 不可

// Generics
interface Gen<T> {
  item: T;
  item2: boolean;
}
const get0: Gen<string> = {
  item: "ストリング",
  item2: false,
}
// デフォルトの型を指定
interface Gen1<T = number> {
  item: T;
}
const gen3: Gen1 = { item: 111 }
// 型に制約をつける
interface Gen2<T extends string | number | boolean> {
  item: T;
}
const gen4: Gen2<number> = { item: 111 }
// 関数に対するGenerics
interface Props {
  price: number;
}
function funcG(props: Props) {
  return { value: props.price }
}
const gen10 = funcG({ price: 100 });

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
