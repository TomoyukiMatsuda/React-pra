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

  return <div>サンプル２</div>;
};
