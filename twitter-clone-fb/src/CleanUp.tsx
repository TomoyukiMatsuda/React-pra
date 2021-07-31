import React, {useEffect, useState} from "react";

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    console.log("マウスクリックイベント！！");
    setCurrentNum((preNum) => preNum + 1);
  }
  useEffect(() => {
    console.log("CleanUp の useEffect が走ってる");
    // mousedown: マウスをクリックしたときに実行される処理をリッスンする
    window.addEventListener("mousedown", incrementNum);
  })

  return <div>{currentNum}</div>
}

export default CleanUp;