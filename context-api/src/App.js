import React, { createContext, useContext } from "react";
import "./style.css";

const themeDefault = {
  border: "10px solid red",
};

const themeContext = createContext(themeDefault);

const App = () => {
  const theme = useContext(themeContext);

  return (
    // 하위 요소에서는 제일 첫 Provider의 기본 값이 적용된다.
    <themeContext.Provider value={{ border: "10px solid blue" }}>
      <div className="root" style={theme}>
        <h1>App</h1>
        <Sub1 />
      </div>
    </themeContext.Provider>
  );
};

function Sub1() {
  // Sub1 내의 useContext는 부모 중 가장 먼저 등장한 Provider 값을 갖기 때문에, blue가 적용된다.
  const theme = useContext(themeContext);

  return (
    <themeContext.Provider value={{ border: "10px solid green" }}>
      <div style={theme}>
        <h1>Sub1</h1>
        <Sub2 />
      </div>
    </themeContext.Provider>
  );
}

function Sub2() {
  // Sub2 내의 useContext는 부모 중 가장 먼저 등장한 Provider 값을 갖기 때문에, green이 적용된다.
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub2</h1>
      <Sub3 />
    </div>
  );
}

function Sub3() {
  const theme = useContext(themeContext);

  return (
    <div style={theme}>
      <h1>Sub2</h1>
    </div>
  );
}

export default App;
