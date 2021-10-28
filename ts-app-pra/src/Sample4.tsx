export const Sample4 = () => {
  console.log("########サンプル４############");

  // this は呼び出し元のオブジェクトへの参照を保持する
  const person = {
    name: "Tomoyuki",
    hello: function () {
      console.log("Hello, " + this.name);
    },
  };
  // this はfunctionを読んだ時の「.」の前についているオブジェクトを指している（つまり今回の場合は person が this の正体）
  person.hello();

  const matsudaHello = person.hello.bind({ name: "松田" });
  person.hello.call({ name: "koike" });
  matsudaHello();
  const ref = person.hello;

  return <div>サンプル4</div>;
};
