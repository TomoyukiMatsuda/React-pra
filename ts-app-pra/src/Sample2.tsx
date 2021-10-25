// 変数
import { strict } from "assert";

export const Sample2 = () => {
  // プリミティブ型のコピーはコピー元に影響を及ぼさない
  let a = "こんにちは";
  let b = a;
  b = "おはよう";
  console.log("a", a);
  console.log("b", b);

  // オブジェクトのコピーはコピー元（参照元）に影響を及ぼす
  let c = {
    property: "こんにちは",
  };
  let d = c;
  d.property = "おはよう";
  console.log("c", c);
  console.log("d", d);

  // なので同じことをやろうとすると、こうすると良い（オブジェクトの再代入）
  d = {
    property: "おはよう",
  };
  console.log("d", d);

  // const は再代入を禁止するもの
  const e = {
    property: "初期値",
  };
  // 値への参照は変更が可能
  e.property = "初期値を変更";
  // Attempt to assign to const or readonly variable
  // Cannot assign to 'e' because it is a constant.
  // e = {}; // エラーこれはできない
  // e = d; // これも同様のエラーでできない

  // 分割代入と参照
  const f = {
    property1: "初期値",
  };
  // 分割代入では変更元に影響を及ぼさない
  let { property1 } = f;
  property1 = "初期値を変更";
  console.log("f", f);
  console.log("property1", property1);

  const g = {
    property2: {
      nestProperty: "初期値",
    },
  };
  let { property2 } = g;
  // 変更もと（nestProperty）に影響を及ぼす
  property2.nestProperty = "初期値を変更";
  console.log("g", g);
  console.log("property2", property2);

  // 参照の比較と値の比較
  const obj = {
    property: 0,
  };
  const obj2 = {
    property: 0,
  };
  // オブジェクトの異なる参照先を比較している
  console.log("obj === obj2", obj === obj2); // false
  // プリミティブ型のを比較している
  console.log("obj.property === obj2.property", obj.property === obj2.property); // true

  // 同じ参照を比較している
  const obj3 = obj;
  console.log("obj === obj3", obj === obj3); // true

  // オプショナル引数をもつ関数
  const greeting = (name: string, greet?: string) => {
    console.log(`${greet || "hello"}, ${name}`);
  };
  greeting("松田");
  greeting("ともゆき", "こんちは");

  console.log("###########コールバック関数##############");
  function fn(name: string) {
    console.log("hello" + name);
  }

  function cb(func: (name: string) => void) {
    func("matsuda");
  }
  cb(fn);

  const baseObj = { first: 1, second: 2, third: 3, forth: 4 };
  // second を削除した オブジェクトを生成する（baseObjには影響しない）
  const { second: sec, ...secondDeletedObj } = baseObj;
  const { second: secd, forth, ...deletedObj } = baseObj;
  console.log("secondDeletedObj", secondDeletedObj);
  console.log("deletedObj", deletedObj);

  return <div>サンプル２</div>;
};
