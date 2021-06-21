import {memo} from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo: memo化する（memo()で囲う)ことで、親コンポーネントが再レンダリングされても、
// 子コンポーネントに渡すpropsの値が変更されない限り、子コンポーネントは再レンダリングされないようにする仕組み
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリング")
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...")
  })
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
        </div>
      ) : null}
    </>
  )
});