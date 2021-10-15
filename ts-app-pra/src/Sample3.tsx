import React from "react";

export const Sample3: React.VFC = () => {
  function a() {
    console.log("hello");
  }

  a.prop = 0;
  a.method = () => {
    console.log("method");
  };
  a();
  a.method();
  console.log(a);

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
