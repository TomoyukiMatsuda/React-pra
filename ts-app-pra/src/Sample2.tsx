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

  return <div>サンプル２</div>;
};
