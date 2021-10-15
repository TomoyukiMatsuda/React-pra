import React from "react";

export const Sample3: React.VFC = () => {
  // 問１
  let obj = {
    prop1: 10,
    prop2: null as any,
  };

  function minus(obj: any, val: number) {
    let prop1 = obj.prop1;
    obj.prop1 = obj.prop1 - val;
    prop1 = prop1 - val;
  }
  minus(obj, 1);
  console.log(obj.prop1);

  function double(obj: any) {
    let { prop1 } = obj;
    obj.prop1 = obj.prop1 * 2;
  }
  double(obj);
  console.log(obj.prop1);

  return <div>サンプル３</div>;
};
