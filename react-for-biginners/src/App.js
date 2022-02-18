import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");

  //useEffect의 두번째인자인 Dependency를 비워놓으면, 처음 렌더링 될 떄만 1번쨰 인자인 callback을 호출한다.
  useEffect(() => {
    console.log("I run only once");
  }, []);

  //useEffect의 두번째 인자인 Dependency에 state를 넣어놓으면, 해당 state가 변할 때만 1번쨰 인자인 callback을 호출한다.
  useEffect(() => {
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  //Dependency에 어려개의 인자를 넣어서 해당 인자가 바뀔 떄 실행될 수 있게 만들 수도 있다.
  useEffect(() => {
    console.log("I run when 'counter' || 'keyword' changes");
  }, [counter, keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
