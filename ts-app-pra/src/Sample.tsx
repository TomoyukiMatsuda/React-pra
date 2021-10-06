// ジェネリクス
interface Gene<S, T> {
  foo: S;
  bar: T;
  func: (arg: S) => void;
}

export const Sample = () => {
  const gene: Gene<string, number> = {
    foo: "foo",
    bar: 100,
    func: (arg) => console.log(arg),
  };

  gene.func(gene.foo);

  // ホイスティング
  // a(); 呼べない
  func();
  // 変数宣言の場合はホイスティングが効かない
  const a = () => {
    console.log("aを実行");
  };
  // ホイスティングが効く
  function func() {
    // console.log("funcを実行");
  }

  // 参照渡し、値渡し
  let val = 0;
  // ここでは値が渡っているはず、参照ではない
  let val2 = val;
  // そのため、val の値に変更はされない
  val2 = 1;

  console.log("問題１ val：", val); // 問題１：0
  console.log("問題１ val2：", val2); // 問題１：1

  let obj = {
    prop1: 10,
  };
  // ここでは参照が渡されているだけなので、
  const obj2 = obj;
  // obj の prop1 も変更されてしまう
  obj2.prop1 = 9;
  console.log("問題２ obj：", obj); // 問題２：{prop1: 9}
  console.log("問題２ obj2：", obj2); // 問題２：{prop1: 9}

  function fn1(arg: any) {
    arg.prop2 = 8;
    // props2: 8 を追加したオブジェクトを return
    return arg;
  }
  let obj3 = fn1(obj2);
  console.log("問題３ obj：", obj); // 問題３：{ prop1: 9, prop2: 8 }
  console.log("問題３ obj3：", obj3); // 問題３：{ prop1: 9, prop2: 8 }

  function fn2(arg: any) {
    // 引数のオブジェクト事態には影響を及ぼさない
    arg = { ...arg, prop3: 7 };
    return arg;
  }
  const obj4 = fn2(obj); // 問題４
  console.log("問題４ obj：", obj); // 問題４ obj：{ prop1: 9, prop2: 8 }
  console.log("問題４ obj4：", obj4); // 問題４ obj4：{ prop1: 9, prop2: 8, prop3: 7 }

  /**
   * 問題１：
   * obj.prop1の値をminus関数を用いて-1したい
   * と思いました。
   * しかしminus関数実行後のobj.prop1の値は変
   * わっていませんでした。
   * 以下のminus関数をどのように修正すればobj.prop1
   * の値を変更することができるでしょうか？
   *
   */
  console.log("#####################################");
  let object = {
    prop1: 10,
  };

  function minus(object: any, value: number) {
    obj.prop1 = obj.prop1 - value;
  }

  minus(object, 1);
  console.log(object.prop1);

  return (
    <div>
      <p>サンプル</p>
    </div>
  );
};
