export const Sample4 = () => {
  console.log("########サンプル４############");

  const person = {
    name: "Tomoyuki",
    hello: function () {
      console.log("Hello, " + this.name);
    },
  };
  person.hello();
  return <div>サンプル4</div>;
};
