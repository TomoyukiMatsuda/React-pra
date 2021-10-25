import React from "react";
import "./App.css";
import { Sample } from "./Sample";
import { Sample2 } from "./Sample2";
import { Sample3 } from "./Sample3";
import { Sample4 } from "./Sample4";

// Intersection Types
type Profile = {
  age: number;
  city: string;
};

type Login = {
  username: string;
  password: string;
};

type User = Profile & Login;
const user1: User = {
  age: 30,
  city: "Nagano",
  username: "Matsuda",
  password: "xxxxyyyy",
};

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
};
let key: keyof Keys;
key = "primary";
key = "secondary";

// typeof + keyof
const SPORTS = {
  soccer: "サッカー",
  baseBall: "野球",
};
let tkSports: keyof typeof SPORTS; // key名のstring型しか受け付けなくなる
tkSports = "soccer";
tkSports = "baseBall";

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
};
const drink2: MorningDrink = {
  id: 2,
  DrinkType: Drink.Water,
};

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
};
// デフォルトの型を指定
interface Gen1<T = number> {
  item: T;
}
const gen3: Gen1 = { item: 111 };
// 型に制約をつける
interface Gen2<T extends string | number | boolean> {
  item: T;
}
const gen4: Gen2<number> = { item: 111 };
// 関数に対するGenerics
interface Props {
  price: number;
}
function funcG(props: Props) {
  return { value: props.price };
}
const gen10 = funcG({ price: 100 });

// string型の数値をnumber型に変換（例："10" → 10）
// const convertNumStringValueToNumberType = (total: IDailyNearMissTotal) => {
//   return Object.fromEntries(
//     Object.entries(total).map(([key, value]) => {
//       const castedVal = Number(value)
//       if (Number.isFinite(castedVal)) {
//         return [key, castedVal]
//       }
//       return [key, value]
//     }),
//   )
// }

// こっから動き確認
// const obj = { a: 1, b: 2, c: 3 };
// const convertedObj = Object.fromEntries(
//   Object.entries(obj).map(([key, value]) => {
//     console.log([key, value * 2]);
//     return [key, value * 2];
//   })
// );
// console.log(convertedObj);

// こっから実装
const objArr = [
  { a: 10, b: "10", c: "2021-09-01T06:38:19.274406Z" },
  { a: 20, b: "20", c: "2021-09-02T06:38:19.274406Z" },
  { a: 30, b: "30", c: "2021-09-03T06:38:19.274406Z" },
  { a: 40, b: "40", c: "2021-09-04T06:38:19.274406Z" },
  { a: 50, b: "50", c: "2021-09-05T06:38:19.274406Z" },
];

const convertedObjArr = objArr.map((obj) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      // value を number型にキャストする
      const castedValue = Number(value);
      if (Number.isFinite(castedValue)) {
        //console.log([key, castedValue]);
        // キャストに成功していれば、キャストした値をvalueとして返す
        return [key, castedValue];
      }
      //console.log([key, value]);
      // キャストに失敗すれば、そのままの値をvalueとして返す
      return [key, value];
    })
  );
});

//console.log(convertedObjArr);

function factory() {
  let num = 0;

  return () => {
    num = num + 1;
    console.log(num);
  };
}

const increment = factory();
// increment();
// increment();
// increment();
// increment();

// クロージャのメリットは、オブジェクトの変数やメソッドを他のプログラムから簡単に変更されないように制御できることです。

// ４つのクロージャ関数を生成して返す関数
function calcFactory(def: number) {
  // ローカル変数 result：calcFactory関数のスコープ内でしか参照できない
  let result: number = def;

  // この４つの関数たちがクロージャ
  const plus = (num: number) => {
    console.log("計算前", result);
    result = result + num;
    console.log("計算後", result);
  };
  const minus = (num: number) => {
    console.log("計算前", result);
    result = result - num;
    console.log("計算後", result);
  };
  const multiply = (num: number) => {
    console.log("計算前", result);
    result = result * num;
    console.log("計算後", result);
  };
  const divide = (num: number) => {
    console.log("計算前", result);
    result = result / num;
    console.log("計算後", result);
  };

  // クロージャ関数を返す
  return { plus, minus, multiply, divide };
}

// このタイミングでdefに10をもつクロージャが生成される
const calc = calcFactory(10);
calc.plus(3);
calc.minus(5);
calc.multiply(8);
calc.divide(4);

console.log("--------------------------------------");

// このタイミングでdefに20をもつcalcとは異なるクロージャが生成される
const calc2 = calcFactory(20);
calc2.plus(3);
calc2.minus(5);
calc2.multiply(8);
calc2.divide(4);

const calcf = (function (def: number) {
  // ローカル変数 result：calcFactory関数のスコープ内でしか参照できない
  let result: number = def;

  // この４つの関数たちがクロージャ
  const plus = (num: number) => {
    console.log("計算前", result);
    result = result + num;
    console.log("計算後", result);
  };
  const minus = (num: number) => {
    console.log("計算前", result);
    result = result - num;
    console.log("計算後", result);
  };
  const multiply = (num: number) => {
    console.log("計算前", result);
    result = result * num;
    console.log("計算後", result);
  };
  const divide = (num: number) => {
    console.log("計算前", result);
    result = result / num;
    console.log("計算後", result);
  };

  // クロージャ関数を返す
  return { plus, minus, multiply, divide };
})(20);

console.log("#############################################");

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      {/*<Sample />*/}
      <Sample2 />
      {/*<Sample3 />*/}
      {/*<Sample4 />*/}
    </div>
  );
}

export default App;
