import { useState, useEffect } from "react";

function Hello() {
  const effectFn = () => {
    console.log("created :)");
    return destroyedFn;
  };
  // 보통은 아래와 같은 함수는 잘 쓰지 않는다.
  // 하지만 알아두면 나중에 쓸일이 있을 수 있다.
  const destroyedFn = () => {
    console.log("destroyed :(");
  };
  useEffect(effectFn, []);
  return <h1>Hello</h1>;
}

function App2() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App2;
