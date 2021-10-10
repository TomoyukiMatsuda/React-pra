// 変数
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

  return <div>サンプル２</div>;
};
