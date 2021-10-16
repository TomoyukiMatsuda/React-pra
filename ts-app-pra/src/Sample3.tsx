import React from "react";

export const Sample3: React.VFC = () => {
  // 関数funcを定義
  function func() {
    console.log("funcを実行");
  }

  // 関数funcに値（prop）と関数（method）を格納する
  func.prop = 10;
  func.method = () => {
    console.log("methodを実行");
  };

  // funcを実行
  func();
  // func.prop の中身を確認
  console.log("func.prop：", func.prop);
  // func.methodを実行
  func.method();

  // func の中身を確認してみる
  console.log({ func });

  console.log("#########################");

  const b = () => {
    console.log("bだよ");
  };
  b.prop = 10;
  b.method = () => {
    console.log("ぢゃお");
  };

  b();
  b.method();
  console.log(b.prop);
  console.log(b);

  return <div>サンプル３</div>;
};
