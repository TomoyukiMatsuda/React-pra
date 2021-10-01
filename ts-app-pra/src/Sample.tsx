export const Sample = () => {
  // ホイスティング
  // a(); 呼べない
  func();

  // 変数宣言の場合はホイスティングが効かない
  const a = () => {
    console.log("aを実行");
  };

  // ホイスティングが効く
  function func() {
    console.log("funcを実行");
  }

  return (
    <div>
      <p>サンプル</p>
    </div>
  );
};
